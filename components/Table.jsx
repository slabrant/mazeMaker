import React, { useEffect, useState } from "react";
import { TableCell } from "./TableCell";

export function Table ({ rowCount, columnCount, selectedMaze, borderVisible }) {
    const [mazeLayout, setMazeLayout] = useState([]);

    // useEffect(() => {
    //     const savedLayout = JSON.parse(localStorage.getItem("mazeLayout")) || [];
    //     setMazeLayout(savedLayout);
    // }, []);

    return (
        <table className={"d-flex " + (borderVisible ? "table-spaced" : "table-unspaced")}>
            <tbody>
                {[...Array(rowCount)].map((unused, rowNum) => (
                    <tr key={'row' + rowNum}>
                        {[...Array(columnCount)].map((unused, colNum) => (
                            <TableCell colNum={colNum} rowNum={rowNum} selectedMaze={selectedMaze} setMazeLayout={setMazeLayout} borderVisible={borderVisible} />
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
