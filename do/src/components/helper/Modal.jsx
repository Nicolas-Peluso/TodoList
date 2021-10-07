import React from 'react'
import Style from "./Modal.module.css"

function Modal({ setExcluir }) {
    return (
        <div className={Style.ContainerModal}>
            <p>Voce vai excluir permanentemente essa tarefa. Deseja
                continuar
            </p>
            <button onClick={() => {
                setExcluir(false)
            }}>Nao</button>
            <button onClick={() => setExcluir(true)}>Sim</button>
        </div>
    )
}

export default Modal
