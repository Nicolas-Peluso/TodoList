import React from 'react';
import InputCheckBox from '../form/InputCheckBox';
import ScreenForm from './ScreenForm';
import Style from "./PrincipalScreen.module.css"

function PrincipalScreen() {
    const [options, setOptions] = React.useState(() => {
        const hasLocal = localStorage.getItem("ListaToDo")
        return hasLocal ? JSON.parse(hasLocal) : [
            {
                Value: "tarefa padrão",
                id: 0,
                feito: false,
                important: ''
            }
        ]
    })
    React.useEffect(() => {
        localStorage.setItem("ListaToDo", JSON.stringify(options))
    }, [options])
    return (
        <div className={Style.Container}>
            <h1>Lista de afazeres</h1>
            <InputCheckBox options={options}
                setValue={setOptions} label={options} />
            <ScreenForm options={options} setValue={setOptions} />
        </div>
    )
}

export default PrincipalScreen
