import React from 'react'
import InputRadio from '../form/InputRadio'
import InputText from '../form/InputText'
import Style from "./ScreenForm.module.css"

function ScreenForm({ setValue, options }) {
    const [text, setText] = React.useState("")
    const [important, setimportant] = React.useState('#0CC52F')

    function handleSubmit(e) {
        e.preventDefault()
        if (text) {
            setValue([...options,
            { Value: text, id: Math.random() * (4 - 5000) + 4, feito: false, important: important }])
            setText('')
        }
    }

    function handleChange({ target }) {
        setText(target.value)
    }

    return (
        <form onSubmit={handleSubmit} className={Style.form} >
            <InputText handleChange={handleChange} value={text} />
            <button type="submit">Marcar</button >
            <InputRadio setValue={setimportant} important={important} />
        </form>
    )
}

export default ScreenForm