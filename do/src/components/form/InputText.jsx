import React from 'react'
import Style from "./InputText.module.css"

function InputText({ value, handleChange }) {

    return (
        <input type="text" value={value} onChange={handleChange} className={Style.input}
            placeholder="Digite a terefa"
        />
    )
}

export default InputText
