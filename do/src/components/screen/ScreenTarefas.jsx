import React from 'react'
import Style from "./ScreenTarefas.module.css"

function ScreenTarefas({ option, onChange }) {
    const [Input, setInput] = React.useState(false)

    return (
        <div className={Style.containerTarefa}
            style={{
                borderColor: option.important
            }}>
            {!Input ? <button onClick={() => {
                setInput(true)
            }} className={Style.pen}>🖉</button> :
                <button onClick={() => {
                    setInput(false)
                }} className={Style.pen}>☑</button>
            }

            {Input ? <input type="text"
                value={option.Value}
                onChange={(e) => onChange(e, option.id)} /> :

                <label htmlFor={option.id} className={Style.label}
                    key={option.id + 3}>
                    {option.feito ? <s className={Style.s}>{option.Value}</s> : option.Value}
                </label>}
        </div>
    )
}

export default ScreenTarefas
