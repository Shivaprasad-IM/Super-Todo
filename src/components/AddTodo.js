import React from 'react'


import './AddTodo.css'

class AddTodo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: ''

        }
        this.handleInput = this.handleInput.bind(this)
        this.addTodo = this.addTodo.bind(this)
    }

    handleInput(e) {
        console.log(e.target.value)
        this.setState({
            inputValue: e.target.value,
        })
    }

    addTodo() {
        let currentValue = this.state.inputValue
        this.props.addTodo(currentValue)
        
        this.setState({
            inputValue: '',
        })
    }


    render() {
        const inputValue = this.state.inputValue
        return (
            <div className="add-todo-container">
                <input type="text" name="" id="" className="add-todo-input" placeholder="Add Todo" value={inputValue} onChange={this.handleInput} />
                <button className="add-todo-button" onClick={this.addTodo}>Add</button>
            </div> 
    
        )
    }
}

export default AddTodo