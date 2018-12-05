import React , { Component } from 'react';
import { connect } from 'react-redux'
import { deleteTodo } from '../actions/postActions'

class Todos extends Component {

    handleClick(id){
        this.props.dispatch(id)
    }

    render(){
        const { todos } = this.props
        const TodoList = todos.length ? (
            todos.map( todo => {
                return(
                    <div className="collection-item" key={todo.id}>
                        <span onClick = {() => {this.handleClick(todo.id)}}>{todo.content}</span>
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
}

const mapStateToProps = (state) => {
    return {
        todos:state.todos
    }
}

const mapDispatchToProps = (Dispatch) => {
    return{
        dispatch: (id) => {Dispatch(deleteTodo(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Todos);