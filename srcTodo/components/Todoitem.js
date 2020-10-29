import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { isCompositeComponent } from 'react-dom/test-utils';

export class Todoitem extends Component {
    getStyle = () => {
        return{
            background: 'gray',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ?
            'line-through' : 'none'
        }
        // if (this.props.todo.completed) {
        //     return {
        //         textDecoration: 'line-through'
        //     }
        // } else {
        //     return {
        //         textDecoration: 'none'
        //     }
        // }
    }

    render() {

        const{ id, title } = this.props.todo;

        return (
            // <div style = {{ backgroundColor: 'Gray' }}>
            // <div style = { itemStyle }>
            <div style = { this.getStyle() }>
                <p>
                    <input type = "checkbox" onChange = {this.props.markComplete.bind(this, id)}/> {' '}
                    { title }
                    <button style = {btnStyle} onClick = {this.props.delTodo.bind(this, id)}>
                        x
                    </button>
                </p>
                
            </div>
        )
    }
}

// PropTypes
Todoitem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
	delTodo: PropTypes.func.isRequired
}

const btnStyle = {
    backgroundColor: 'red',
    color: 'white',
    float: 'right',
    cursor: 'pointer'
}

// const itemStyle = {
//     backgroundColor: 'green'
// }

export default Todoitem
