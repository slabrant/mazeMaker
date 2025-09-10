import React, { useState } from "react";
import { Table } from "./Table";
import { MazeTypes } from "./MazeTypes";

export function App () {
    const [rowCount, setRowCount] = useState(6);
    const [columnCount, setColumnCount] = useState(6);
    const [borderVisible, setBorderVisible] = useState(true);
    const [selectedMaze, setSelectedMaze] = useState(15);

    return (
        <div className="d-flex">
            <MazeTypes selectedMaze={selectedMaze} setSelectedMaze={setSelectedMaze} />
            <div>
                <span className="d-flex align-items-center gap-2 mb-2 mt-2">
                    <NumberInput label={"row"} value={rowCount} setValue={setRowCount} />
                    <NumberInput label={"column"} value={columnCount} setValue={setColumnCount} />
                    <label className="w-5 form-check-label" htmlFor="border_visible">Borders</label>
                    <input id="border_visible" className="w-5 form-check-input" type="checkbox" checked={borderVisible} onChange={(e) => setBorderVisible(e.target.checked)}></input>
                </span>
                <Table rowCount={rowCount} columnCount={columnCount} selectedMaze={selectedMaze} borderVisible={borderVisible} />
            </div>
        </div>
    );
}
export function NumberInput({ label, value, setValue}) {

    const onNumberChange = (target, setValue) => {
        setValue(parseInt(target.value));
    }

    return (
        <>
            <label className="w-5 text-capitalize" htmlFor={label + "_input"}>{label}</label>
            <input id={label + "_input"} className="w-5 form-control" type="number" min={0} step={1} value={value} 
                onChange={(e) => onNumberChange(e.target, setValue)}></input>
        </>
    );
}

