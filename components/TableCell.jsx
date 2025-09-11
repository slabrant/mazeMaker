import React, { useState } from "react";

export function TableCell({ initialMazeId, selectedMaze, borderVisible, mouseRef }) {
    const [mazeId, setMazeId] = useState(initialMazeId || 15);
    
    const selectMaze = (e) => {
        setMazeId(selectedMaze);
    };
    
    return (
        <td 
            key={'cell' + Math.random()}
            onMouseDown={selectMaze}
            onMouseMove={() => mouseRef.down && selectMaze()}
            className={"square" + (borderVisible ? " border-solid" : "")} 
        >
            <img 
                src={"/assets/" + mazeId + ".png"}
                className={"pixelated user-select-none " + (borderVisible ? "square-no-border" : "square")}
                draggable="false">
            </img>
        </td>
    );
}
