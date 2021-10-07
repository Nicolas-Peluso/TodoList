import React from 'react'
import Style from "./ScreenTarefas.module.css"

function ScreenTarefas({ option }) {
    return (
        <div className={Style.containerTarefa}
            style={{
                borderColor: option.important
            }}>

            <label htmlFor={option.id} className={Style.label}
                key={option.id + 3}>
                {option.feito ? <s className={Style.s}>{option.Value}</s> : option.Value}
            </label>
        </div>
    )
}

export default ScreenTarefas
