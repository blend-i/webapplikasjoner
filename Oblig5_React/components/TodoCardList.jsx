import React from 'react';
import TodoCard from './TodoCard';

function TodoCardList({list, removeTodo, addComplete}) {
    return (
        <div className="todo__list">
            <ul>
            {
            list &&
            list.map((list) => <TodoCard key={list.id} {...list} removeTodo={removeTodo} addComplete={addComplete} />)
            }
            </ul>

        </div>
    )
}

export default TodoCardList;
