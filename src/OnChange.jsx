
import { useState } from "react";

export default function onchange(){
    const [age, setAge] = useState(1);

    function increment(){
        setAge(a + 1);
    }
    return(
        <>
            <h1>Your age: {age}</h1>
            <button 
            onClick={() => {
                increment();
                increment();
                increment();
            }}>
                +3
            </button>
            <br/>
            <button onClick={() =>{
            increment();
            }}>+1</button>

        </>
    )
}
