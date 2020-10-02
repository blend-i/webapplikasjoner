import React from 'react';

function TodoButton({modalHandler}) {
    return (
        <div className="todo__button">
            <button onClick={modalHandler}>+Todo</button>
        </div>
    )
}

export default TodoButton;
