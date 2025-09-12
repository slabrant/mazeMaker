import React, { useEffect, useState, useRef } from "react";
import { TableCell } from "./TableCell";

export function Table ({ rowCount, columnCount, selectedMaze, borderVisible }) {
    const mouseRef = useRef(false);

    useEffect(() => {
        const handleMouseDown = () => { mouseRef.down = true; };
        const handleMouseUp = () => { mouseRef.down = false; };

        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);
    }, []);

    return (
        <div className='scroll-box'>
            <table className="d-flex table-unspaced">
                <tbody>
                    {[...Array(rowCount)].map((unused, rowNum) => (
                        <tr key={'row' + rowNum}>
                            {[...Array(columnCount)].map((unused, colNum) => (
                                <TableCell
                                    selectedMaze={selectedMaze}
                                    borderVisible={borderVisible}
                                    mouseRef={mouseRef}
                                />
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
