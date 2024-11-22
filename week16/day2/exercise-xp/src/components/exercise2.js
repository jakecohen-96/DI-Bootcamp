import React from "react";

const user = {
    firstName: 'Bob',
    lastName: 'Dylan',
    favoriteAnimals: ["Horse", "Turtle", "Elephant", "Monkey"],
};

const Exercise2 = () => {
    return (
        <>
            <h3>{user.firstName} {user.lastName}</h3>
            <ul>
                {user.favoriteAnimals.map((animal, index) => (
                    <li key={index}>{animal}</li>
                ))}
            </ul>
        </>
    );
};

export default Exercise2;