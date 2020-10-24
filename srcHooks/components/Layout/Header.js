import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return(
        <header>
            <h1 style={headerStyle}>ToDoList</h1>
            <Link style={linkStyle} to="/">Home</Link> | <Link to="/about">About</Link>
        </header>
    )
}

const headerStyle = {
    backgroundColor: 'black',
    color: 'white'
  }

const linkStyle = {
    color: 'black'
}

export default Header
