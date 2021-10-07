import React from 'react'
import Style from "./InputRadio.module.css"

function InputRadio({ setValue, important }) {
    const low = '#0CC52F';
    const medium = '#FFD900';
    const high = '#FF0A00';

    function handleChange({ target }) {
        if (target.checked)
            switch (target.value) {
                case low:
                    setValue(low)
                    break;
                case medium:
                    setValue(medium)
                    break;
                case high:
                    setValue(high)
                    break;
            }
    }

    return (
        <div className={Style.Container}>
            <label htmlFor="low" className={Style.label}>importancia baixa</label>
            <input type="radio" value={low} onChange={handleChange} name="Important" id="low"
                checked={important === low}
            />
            <br />
            <label htmlFor="medium" className={Style.label}>Importancia media</label>
            <input type="radio" value={medium} onChange={handleChange} name="Important" id="medium"
                checked={important === medium}
            /> <br />
            <label htmlFor="high" className={Style.label}>Importancia alta</label>
            <input type="radio" value={high} onChange={handleChange} name="Important" id="high"
                checked={important === high}
            />
        </div>
    )
}

export default InputRadio
