import React, {useEffect} from "react";

export function MazeType ({ selectedMaze, setSelectedMaze, num }) {

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
