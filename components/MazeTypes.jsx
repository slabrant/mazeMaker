import React, { useState } from "react";
import { MazeType } from "./MazeType";

export function MazeTypes ({ selectedMaze, setSelectedMaze }) {

    return (
        <>
            <div className="d-flex flex-column align-items-between gap-3 m-3">
                <MazeType selectedMaze={selectedMaze} setSelectedMaze={setSelectedMaze} num={0} />
                <MazeType selectedMaze={selectedMaze} setSelectedMaze={setSelectedMaze} num={5} />
                <MazeType selectedMaze={selectedMaze} setSelectedMaze={setSelectedMaze} num={1} />
                <MazeType selectedMaze={selectedMaze} setSelectedMaze={setSelectedMaze} num={2} />
                <MazeType selectedMaze={selectedMaze} setSelectedMaze={setSelectedMaze} num={9} />
                <MazeType selectedMaze={selectedMaze} setSelectedMaze={setSelectedMaze} num={12} />
                <MazeType selectedMaze={selectedMaze} setSelectedMaze={setSelectedMaze} num={11} />
                <MazeType selectedMaze={selectedMaze} setSelectedMaze={setSelectedMaze} num={7} />
            </div>
            <div className="d-flex flex-column align-items-between gap-3 m-3">
                <MazeType selectedMaze={selectedMaze} setSelectedMaze={setSelectedMaze} num={15} />
                <MazeType selectedMaze={selectedMaze} setSelectedMaze={setSelectedMaze} num={10} />
                <MazeType selectedMaze={selectedMaze} setSelectedMaze={setSelectedMaze} num={4} />
                <MazeType selectedMaze={selectedMaze} setSelectedMaze={setSelectedMaze} num={8} />
                <MazeType selectedMaze={selectedMaze} setSelectedMaze={setSelectedMaze} num={3} />
                <MazeType selectedMaze={selectedMaze} setSelectedMaze={setSelectedMaze} num={6} />
                <MazeType selectedMaze={selectedMaze} setSelectedMaze={setSelectedMaze} num={14} />
                <MazeType selectedMaze={selectedMaze} setSelectedMaze={setSelectedMaze} num={13} />
            </div>
        </>
    );
}
