import React from 'react'
import ScreenTarefas from '../screen/ScreenTarefas'
import Style from "./InputCheckBox.module.css"

function InputCheckBox({ options, setValue }) {

    function handleChange(e, i) {
        if (e.target.checked) {
            setValue([...options], options[i].feito = true)
            console.log(options)
        }
        else
            setValue([...options], options[i].feito = false)
    }

    async function handleExcluir(tarefa) {
        setValue(options.filter(option => option.id === tarefa ? false : option))
    }

    return (

        <div className={Style.container}>
            {options && options.map((option, i) => (
                <div className={Style.tarefa}>
                    <button onClick={() => handleExcluir(option.id)}
                        className={Style.button}>❌</button>

                    <ScreenTarefas option={option} />
                    <input type="checkbox" value={option.Value}
                        onChange={(e) => handleChange(e, i)}
                        checked={option.feito} key={option.id} id={option.id}
                        className={Style.input} /> <br />
                </div>
            ))} </div>

    )
}

export default InputCheckBox
