import React from 'react';

function TodoCard({id, title, description, author, removeTodo, addComplete}) {
    return (
        <li key={id} className="todoCard">
            <h4>{title}</h4>
            <p className="desc">{description}</p>
            <p className="author__p">{author}</p>
            <button onClick={() => addComplete(id)} className="complete">Complete</button>
            <button onClick={() => removeTodo(id)} className="delete">Delete</button>
        </li>
    )
}

export default TodoCard;
