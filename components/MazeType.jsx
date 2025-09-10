import React, {useEffect} from "react";

export function MazeType ({ selectedMaze, setSelectedMaze, num }) {

    const selectSelf = () => {
        setSelectedMaze(num);
    }

    return (
        <div role="button" className={selectedMaze === num ? "shadow-lg border border-4 border-primary-subtle" : "shadow m-1"}
            onClick={selectSelf}>
            <img src={"assets/" + num + ".png"} className="square"></img>
        </div>
    );
}
