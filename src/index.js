import React from 'react'
import ReactDOM from 'react-dom'

import Nav from './components/Nav'
import TodoContainer from './components/TodoContainer'

import './index.css'

const App = () => {
    return (
    <>
        <Nav />
        <TodoContainer />
    </>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))