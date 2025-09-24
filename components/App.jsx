import React, { useState, useEffect, useRef } from "react";
import { Table } from "./Table";
import { MazeTypes } from "./MazeTypes";
import { NumberInput } from "./NumberInput";
import { AppContext } from "./AppContext";

export function App () {
    const [rowCount, setRowCount] = useState(12);
    const [columnCount, setColumnCount] = useState(12);
    const [borderVisible, setBorderVisible] = useState(true);
    const [selectedMaze, setSelectedMaze] = useState(-1);

    return (
        <AppContext.Provider value={{ selectedMaze, setSelectedMaze }}>
            <div className="d-flex">
                <MazeTypes/>
                <div>
                    <span className="d-flex align-items-center gap-2 my-2">
                        <NumberInput label={"row"} value={rowCount} setValue={setRowCount} />
                        <NumberInput label={"column"} value={columnCount} setValue={setColumnCount} />
                        <label className="w-5 form-check-label user-select-none" htmlFor="border_visible">Borders</label>
                        <input id="border_visible" className="w-5 form-check-input" type="checkbox" checked={borderVisible} onChange={(e) => setBorderVisible(e.target.checked)}></input>
                    </span>
                    <Table rowCount={rowCount} columnCount={columnCount} borderVisible={borderVisible} />
                </div>
            </div>
        </AppContext.Provider>
    );
}
