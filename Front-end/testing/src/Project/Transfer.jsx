import React, { useState } from 'react'

function Transfer() {

    const initialData = [
        { id: 1, name: "Item 1" },
        { id: 2, name: "Item 2" },
        { id: 3, name: "Item 3" },
        { id: 4, name: "Item 4" },
        { id: 5, name: "Item 5" }
    ];

    // State to store items on left and right side
    const [leftSide, setLeftSide] = useState(initialData);
    const [rightSide, setRightSide] = useState([]);

    // Function to handle moving an item from left to right
    const moveToRight = (item) => {
        setLeftSide(leftSide.filter(i => i.id !== item.id)); // Remove item from left
        setRightSide([...rightSide, item]); // Add item to right
    };

    // Function to handle moving an item from right to left (if needed)
    const moveToLeft = (item) => {
        setRightSide(rightSide.filter(i => i.id !== item.id)); // Remove item from right
        setLeftSide([...leftSide, item]); // Add item back to left
    };

    return (
        <div className="transfer-container">
            <div className="box left-box">
                <h3>Left Side</h3>
                <div className="box-items">
                    {leftSide.map(item => (
                        <div key={item.id} className="box-item">
                            <span>{item.name}</span>
                            <button onClick={() => moveToRight(item)}>→</button>
                        </div>
                    ))}
                </div>
            </div>

            <div className="box right-box">
                <h3>Right Side</h3>
                <div className="box-items">
                    {rightSide.map(item => (
                        <div key={item.id} className="box-item">
                            <span>{item.name}</span>
                            <button onClick={() => moveToLeft(item)}>←</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}


export default Transfer