import { useState, useEffect } from "react";

const Color = () => {
    const [favouriteColor, setFavoriteColor] = useState('red');

    useEffect(() => {
        console.log("useEffect called");
    });

    const changeColor = () => {
        setFavoriteColor('blue');
    };

    return (
        <>
            <div>
                <h1>{favouriteColor}</h1>
                <button onClick={changeColor}>Change Color</button>
            </div>
        </>
    );
};

export default Color;