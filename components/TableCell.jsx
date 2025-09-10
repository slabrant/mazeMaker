import React, { useState } from "react";

export function TableCell({ colNum, rowNum, selectedMaze, setMazeLayout, borderVisible }) {
    const [mazeId, setMazeId] = useState(15);
    
    const onClick = (e, rowNum, colNum) => {
        // setMazeLayout((oldValue) => {
        //     oldValue[rowNum] ||= [];
        //     oldValue[rowNum][colNum] = selectedMaze;

        //     localStorage.setItem("mazeLayout", JSON.stringify(oldValue));

        //     return oldValue;
        // });
        setMazeId(selectedMaze);
    };
//  + 
    return <td key={'cell' + colNum} className={"square" + (borderVisible ? " border-solid" : "")} onClick={(e) => onClick(e, rowNum, colNum)}>
        <img src={"/assets/" + mazeId + ".png"} className="square"></img>
    </td>;
}