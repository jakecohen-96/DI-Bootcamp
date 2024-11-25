import { useState } from "react";

const Phone = () => {
    const [brand] = useState("iPhone");
    const [model] = useState("14 Pro");
    const [color, setColor] = useState("purple");
    const [year] = useState(2022);

    const changeColor = () =>{
        setColor('white');
    };

    return (
        <>
        <div>
            <h1>My Phone</h1>
            <p>Brand: {brand}</p>
            <p>Model: {model}</p>
            <p>Color: {color}</p>
            <p>Year: {year}</p>
            <button onClick={changeColor}>Change Color</button>
        </div>
        </>
    )
};

export default Phone;