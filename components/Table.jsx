import React, { useEffect, useState, useRef } from "react";
import { TableCell } from "./TableCell";

export function Table ({ rowCount, columnCount, selectedMaze, borderVisible }) {
    const [mazeLayout, setMazeLayout] = useState([]);
    const mouseRef = useRef(false);

    useEffect(() => {
        const handleMouseDown = () => { mouseRef.down = true; };
        const handleMouseUp = () => { mouseRef.down = false; };

        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);
    }, []);

    // useEffect(() => {
    //     const savedLayout = JSON.parse(localStorage.getItem("mazeLayout")) || [];
    //     setMazeLayout(savedLayout);
    // }, []);

    return (
        <table className="d-flex table-unspaced">
            <tbody>
                {[...Array(rowCount)].map((unused, rowNum) => (
                    <tr key={'row' + rowNum}>
                        {[...Array(columnCount)].map((unused, colNum) => (
                            <TableCell colNum={colNum} rowNum={rowNum} selectedMaze={selectedMaze} setMazeLayout={setMazeLayout} borderVisible={borderVisible} mouseRef={mouseRef} />
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
