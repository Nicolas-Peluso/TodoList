import React from 'react'
import Style from "./Modal.module.css"

function Modal({ onChange }) {
    return (
        <div className={Style.ContainerModal}>
            <p>Voce vai excluir permanentemente essa tarefa. Deseja
                continuar
            </p>
            <div className={Style.Buttons}>

                <button onClick={onChange}>Nao</button>

                <button onClick={onChange}>Sim</button>
            </div>
        </div>
    )
}

export default Modal
