import React from 'react'
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

    function handleExcluir(tarefa) {
        setValue(options.filter(option => option.id === tarefa ? false : option))
    }

    return (

        <div className={Style.container}>
            {options && options.map((option, i) => (
                <>
                    <span key={option.id + 2} >
                        <button onClick={() => handleExcluir(option.id)}
                            className={Style.button}>X</button>
                    </span>

                    <label htmlFor={option.id} className={Style.label}
                        style={{
                            background: option.important === 'low' ? 'green' : 'red'
                        }}
                        key={option.id + 3}
                    >
                        {option.feito ? <s>{option.Value}</s> : option.Value}
                    </label>

                    <input type="checkbox" value={option.Value}
                        onChange={(e) => handleChange(e, i)}
                        checked={option.feito} key={option.id} id={option.id}
                        className={Style.input} /> <br />
                    <br /></>
            ))} </div>

    )
}

export default InputCheckBox
