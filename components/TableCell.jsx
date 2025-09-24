import React, { useState } from "react";
import { useAppContext } from "./AppContext";

export function TableCell({ rowNum, colNum, borderVisible, mouseRef }) {
    const [mazeId, setMazeId] = useState(-1);
    const { selectedMaze } = useAppContext();
    
    const selectMaze = (e) => {
        setMazeId(selectedMaze);
    };
    
    return (
        <td 
            key={`cell-${rowNum}-${colNum}`}
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
