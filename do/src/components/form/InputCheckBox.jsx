import React from 'react'
import Modal from '../helper/Modal'
import ScreenTarefas from '../screen/ScreenTarefas'
import Style from "./InputCheckBox.module.css"

function InputCheckBox({ options, setValue }) {
    const [ShowModal, setShowModal] = React.useState(false)
    const [Item, setItem] = React.useState(null)

    function setItemToExlcude({ target }) {
        console.log("value", target.innerText)

        if (target.innerText === "Sim") {
            setValue(options.filter(option => option.id === Item ? false : option))
            setShowModal(false)
        }
        else if (target.innerText === "Nao") {
            setShowModal(false)
        }
    }

    function handleChange(e, i) {
        if (e.target.checked) {
            setValue([...options], options[i].feito = true)
            console.log(options)
        }
        else
            setValue([...options], options[i].feito = false)
    }

    function handleExcluir(tarefa) {
        setShowModal(true)
        setItem(tarefa)
    }

    function handleTarefaChange(e, i) {
        setValue([...options],
            options.map(opt => opt.id === i ? opt.Value = e.target.value : null
            )
        )
    }

    return (

        <div className={Style.container}>

            {options?.map((option, i) => (
                <div className={Style.tarefa}>
                    <button onClick={() => handleExcluir(option.id)}
                        className={Style.button}>❌</button>

                    <ScreenTarefas option={option} onChange={handleTarefaChange} />
                    <input type="checkbox" value={option.Value}
                        onChange={(e) => handleChange(e, i)}
                        checked={option.feito} key={option.id} id={option.id}
                        className={Style.input} /> <br />
                </div>
            ))}
            {ShowModal && <Modal onChange={setItemToExlcude} />}
        </div>

    )
}

export default InputCheckBox
