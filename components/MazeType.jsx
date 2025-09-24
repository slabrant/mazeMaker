import React from "react";
import { useAppContext } from "./AppContext";

export function MazeType ({ num }) {
    const { selectedMaze, setSelectedMaze } = useAppContext();

    const selectSelf = () => {
        setSelectedMaze(num);
    }

    return (
        <div role="button" className={'shadow border border-4' + (selectedMaze === num ? ' border-primary-subtle' : '')}
            onClick={selectSelf}>
            <img src={"assets/" + num + ".png"} className="square pixelated user-select-none"></img>
        </div>
    );
}
