import pool from "../config/db.js";

export const createUser = async (userData, hashedPassword) => {
    const client = await pool.connect();
    try {
        await client.query("BEGIN");

        const userQuery = `
            INSERT INTO users (email, username, first_name, last_name) 
            VALUES ($1, $2, $3, $4) RETURNING username
        `;
        const { email, username, first_name, last_name } = userData;
        const userResult = await client.query(userQuery, [email, username, first_name, last_name]);

        const passwordQuery = `
            INSERT INTO hashpwd (username, password) 
            VALUES ($1, $2)
        `;
        await client.query(passwordQuery, [userResult.rows[0].username, hashedPassword]);

        await client.query("COMMIT");
        return userResult.rows[0];
    } catch (error) {
        await client.query("ROLLBACK");
        throw error;
    } finally {
        client.release();
    }
};

export const findUserByUsername = async (username) => {
    const result = await pool.query("SELECT * FROM users WHERE username = $1", [username]);
    return result.rows[0];
};

export const findPasswordByUsername = async (username) => {
    const result = await pool.query("SELECT password FROM hashpwd WHERE username = $1", [username]);
    return result.rows[0]?.password;
};

export const getAllUsers = async () => {
    const result = await pool.query("SELECT * FROM users");
    return result.rows;
};

export const getUserById = async (id) => {
    const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
    return result.rows[0];
};

export const updateUser = async (id, userData) => {
    const { email, first_name, last_name } = userData;
    await pool.query("UPDATE users SET email = $1, first_name = $2, last_name = $3 WHERE id = $4", 
                     [email, first_name, last_name, id]);
};