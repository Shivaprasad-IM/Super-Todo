import React from 'react'
import AddTodo from './AddTodo'
import Todo from './Todo'

class TodoContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tasks: []
        }
        this.addTodo = this.addTodo.bind(this)
    }

    addTodo(task) {
        let tasks = this.state.tasks
        tasks.push(task)
        
        this.setState({
            tasks: tasks,
        })
      
    }

    render() {
        return (
            <section className="main std-width">
                <h1> My ToDo's </h1>
                <hr />

                <div className="todo-container">
                    {
                        this.state.tasks.map((task, index)  => {
                            return (
                                <Todo key={index} task={task} taskIndex={index} />
                            )
                        })
                    }
                    
                </div>
        
                <AddTodo addTodo={this.addTodo} />
        </section>
        )
    }
}

export default TodoContainer