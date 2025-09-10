import React from "react";

export function Table ({ rowCount, columnCount }) {
    console.log(rowCount, typeof rowCount, columnCount, typeof columnCount);
    return (
        <table className="d-flex">
            <tbody>
                {[...Array(rowCount)].map((unused, rowNum) => (
                    <tr key={'row' + rowNum}>
                        {[...Array(columnCount)].map((unused, colNum) => (
                            <td key={'cell' + colNum} className="square border-solid"></td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
