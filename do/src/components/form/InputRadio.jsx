import React from 'react'
import Style from "./InputRadio.module.css"

function InputRadio({ setValue, important }) {
    function handleChange({ target }) {
        if (target.checked)
            setValue(target.value)
    }

    return (
        <div className={Style.Container}>
            <label htmlFor="low" className={Style.label}>pouca importancia</label>
            <input type="radio" value="low" onChange={handleChange} name="Important" id="low"
                checked={important === "low"}
            />
            <br />
            <label htmlFor="high" className={Style.label}>Importancia alta</label>
            <input type="radio" value="high" onChange={handleChange} name="Important" id="high"
                checked={important === "high"}
            />
        </div>
    )
}

export default InputRadio
