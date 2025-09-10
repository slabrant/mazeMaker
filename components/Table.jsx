import React, { useState } from "react";

export function Table ({ rowCount, columnCount, selectedMaze }) {
    const [mazeLayout, setMazeLayout] = useState({});
    
    const onClick = (e, rowNum, colNum) => {
        const newLayout = (mazeLayout) => {
            if (typeof mazeLayout?.[rowNum] === "undefined") {
                mazeLayout[rowNum] = [];
            }
            if (typeof mazeLayout[rowNum]?.[colNum] === "undefined") {
                mazeLayout[rowNum][colNum] = [];
            }
            mazeLayout[rowNum][colNum] = selectedMaze;

            return mazeLayout;

        }
        setMazeLayout(newLayout(mazeLayout));
    };

    return (
        <table className="d-flex">
            <tbody>
                {[...Array(rowCount)].map((unused, rowNum) => (
                    <tr key={'row' + rowNum}>
                        {[...Array(columnCount)].map((unused, colNum) => (
                            <td key={'cell' + colNum} className="square border-solid" onClick={(e) => onClick(e, rowNum, colNum)}>
                                {
                                    typeof mazeLayout?.[rowNum]?.[colNum] !== "undefined" ?
                                        <img src={"assets/" + mazeLayout?.[rowNum]?.[colNum] + ".png"} className="square"></img>
                                        : ""
                                }
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
