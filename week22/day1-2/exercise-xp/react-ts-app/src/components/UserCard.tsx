import React from "react";

interface UserCardProps {
    name?: string;
    age?: number;
    role?: string;
}

const UserCard: React.FC<UserCardProps> = ({ 
    name = "unknown", 
    age = 0, 
    role = "visitor" 
}) => {
    return (
        <div style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px" }}>
            <h2>{name}</h2>
            <p>age: {age > 0 ? age : "Not specified"}</p>
            <p>role: {role}</p>
        </div>
    );
};

export default UserCard;