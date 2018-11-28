import React from 'react';

const Todos = (props) => {
    const { todos , deleteTodo } = props

    const TodoList = todos.length ? (
        todos.map( todo => {
            return(
                <div className="collection-item" key={todo.id}>
                    <span onClick = {() => {deleteTodo(todo.id)}}>{todo.content}</span>
                </div>
            )
        })
    ):
    (
    <p className="center"> You have no todo's left , Yay !</p>
    )
    return(
        <div className="todos collection">
            { TodoList }
        </div>
    )
}

export default Todos;