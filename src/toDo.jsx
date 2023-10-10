


function ToDo({todo, removeTask, toggleTask}) {

    return (
        <div className="todo-item container">
            <div className={todo.complete ? 'todo-item__text strike' : 'todo-item__text'}
            onClick={() => toggleTask(todo.id)}>
                {todo.task}
            </div>

            <div className="todo-item__remove" onClick={() => removeTask(todo.id)} >
                X
            </div>

        </div>
    )

    
}

export default ToDo;