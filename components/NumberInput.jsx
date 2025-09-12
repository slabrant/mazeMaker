export function NumberInput({ label, value, setValue}) {

    const onNumberChange = (target, setValue) => {
        setValue(parseInt(target.value || 0));
    }

    return (
        <>
            <label className="text-capitalize user-select-none" htmlFor={label + "_input"}>{label}</label>
            <input id={label + "_input"} className="h-2 form-control " type="number" min={0} step={1} value={value} 
                onChange={(e) => onNumberChange(e.target, setValue)}></input>
        </>
    );
}