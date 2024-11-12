import React, { useState } from "react";

const Semaforo = () =>{

    const [color, setColor] = useState("");

    const lightStyle = (selectedColor) => ({
        height: '150px',
        width: '150px',
        borderRadius: '50%',
        margin: '4px',
        backgroundColor: selectedColor,
        opacity: color === selectedColor ? 1 : 0.3,
        boxShadow: color === selectedColor 
        ? `0 0 20px 10px ${selectedColor}` // Halo luminoso cuando la luz está encendida
        : 'none',
    });

    return (
        <div className="container d-flex flex-column justify-content-center align-items-center p-3">
            <div className="d-flex justify-content-center align-items-center bg-dark p-3" style={{height: '100px', width: '10px'}}></div>
            <div className="d-flex flex-column justify-content-center align-items-center bg-dark p-3 rounded" style={{height: '500px', width: '200px'}}>
                <div
                    className="d-flex justify-content-center align-items-center p-3"
                    style={lightStyle("red")}
                    onClick={() => color == 'red'? setColor("") : setColor("red")}
                ></div>
                <div
                    className="d-flex justify-content-center align-items-center p-3"
                    style={lightStyle("orange")}
                    onClick={() => color == 'orange'? setColor("") : setColor("orange")}
                ></div>
                <div
                    className="d-flex justify-content-center align-items-center p-3"
                    style={lightStyle("green")}
                    onClick={() => color == 'green'? setColor("") : setColor("green")}
                ></div>
            </div>
        </div>
    );
}

export default Semaforo;