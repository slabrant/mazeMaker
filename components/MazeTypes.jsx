import React from "react";
import { MazeType } from "./MazeType";

export function MazeTypes () {

    return (
        <>
            <div className="d-flex flex-column align-items-between gap-2 m-2">
                <MazeType num={0} />
                <MazeType num={5} />
                <MazeType num={1} />
                <MazeType num={2} />
                <MazeType num={9} />
                <MazeType num={12} />
                <MazeType num={11} />
                <MazeType num={7} />
            </div>
            <div className="d-flex flex-column align-items-between gap-2 me-2 my-2">
                <MazeType num={-1} />
                <MazeType num={10} />
                <MazeType num={4} />
                <MazeType num={8} />
                <MazeType num={3} />
                <MazeType num={6} />
                <MazeType num={14} />
                <MazeType num={13} />
            </div>
        </>
    );
}
