const deletePost = (id) => {
    return {
        type: 'DELETE_POST',
        id
    }
}

const deleteTodo = (id) => {
    return{
        type: 'DELETE_TODO',
        id
    }
}

const addTodo = (todo) => {
    return {
        type: 'ADD_TODO',
        todo
    }
}

export {deletePost, deleteTodo, addTodo}