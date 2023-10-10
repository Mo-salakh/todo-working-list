import { useState } from "react"


function ToDoForm({addTask}) {

    const [text, setText] = useState("")

    const handlerSubmit = (e) => {
        e.preventDefault()
        addTask(text)
        setText("")
    }

    const handlerChange = (e) => {
        setText(e.currentTarget.value)
    }

    const handlerPress = (e) => {
        if(e.key === 'enter') {handlerSubmit(e)}
    }

    return (
        <form onClick={handlerSubmit}>
            <input className="input-text"
            type="text" 
            value={text} 
            onChange={handlerChange} 
            onKeyDown={handlerPress} 
            placeholder="Add Task" />

            <button className="plus-btn">
                +
            </button>


        </form>
    )



}


export default ToDoForm