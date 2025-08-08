import React, { useState } from "react";

function Namechange() {
    const [name, setName] = useState("joshua");
    const [age, setAge] = useState(0);
    const [employed, setEmployed] = useState(null); // Set default as "No Status"

    const newName = () => {
        setName("Spongebob");
    };

    const plusAge = () => {
        setAge(age + 1);
    };

    const minusAge = () => {
        setAge(age - 1);
    };

    const resetAge = () => {
        setAge(0);
    };

    const WorkStatus = () => {
        setEmployed((prev) => (prev === null ? true : !prev)); 
    };

    return (
        <div>
            <p>Your Name: {name}</p>
            <button onClick={newName}>Change Name</button>
            <hr />
            <p>Your age: {age}</p>
            <button onClick={plusAge}>Add age</button>
            <button onClick={minusAge}>Minus age</button>
            <button onClick={resetAge}>Reset age</button>
            <hr />
            <p>Work Status: {employed === null ? "No Status" : employed ? "Working" : "Unemployed"}</p>
            <button onClick={WorkStatus}>Check Status</button>
        </div>
    );
}

export default Namechange;