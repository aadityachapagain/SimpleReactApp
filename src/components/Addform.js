import React , { Component } from 'react';
import { connect } from 'react-redux'
import { addTodo } from '../actions/postActions'

class AddTodo extends Component{
    state = {
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.dispatch(this.state.content)
        this.setState({
            content:''
        })
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add new label </label>
                    <input type="text"  onChange={this.handleChange} value={this.state.content}  />
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (Dispatch) => {
    return {
        dispatch : (todo) => {Dispatch(addTodo(todo))}
    }
}

export default connect(null,mapDispatchToProps)(AddTodo);