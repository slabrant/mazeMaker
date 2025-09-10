import React, { useState } from "react";
import { Table } from "./Table";
import { MazeTypes } from "./MazeTypes";

export function App () {
    const [rowCount, setRowCount] = useState(6);
    const [columnCount, setColumnCount] = useState(6);
    const [selectedMaze, setSelectedMaze] = useState(-1);

    const onChange = (value, setValue) => {
        setValue(Number(value));
    }

    return (
        <div className="d-flex">
            <MazeTypes selectedMaze={selectedMaze} setSelectedMaze={setSelectedMaze} />
            <div>
                <div className="d-flex align-items-center gap-2 mb-2 mt-2">
                    <label className="w-auto" htmlFor="row_input">Rows</label>
                    <input id="row_input" className="w-25 form-control" type="number" value={rowCount} onChange={(e) => onChange(e.target.value, setRowCount)}></input>
                    <label className="w-auto" htmlFor="column_input">Columns</label>
                    <input id="column_input" className="w-25 form-control" type="number" value={columnCount} onChange={(e) => onChange(e.target.value, setColumnCount)}></input>
                </div>
                <Table rowCount={rowCount} columnCount={columnCount} selectedMaze={selectedMaze} />
            </div>
        </div>
    );
}
