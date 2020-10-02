/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import Title from './components/Title';
import "./App.scss";
import NavBar from './components/NavBar';
import TodoButton from './components/TodoButton';
import Modall from './components/Modal';
import TodoCard from './components/TodoCard';
import TodoCardList from './components/TodoCardList';
import Search from './components/Search';
import CompletedList from "./components/CompletedList";



const App = () => {

    const myList = [
        { id: 1, title: "Gjøre Webapplikasjoner", description: "Lære meg hva useEffect egentlig er.", author: "Blendi" },
        { id: 2, title: "Lage middag", description: "Taco?!", author: "Blendi" },
        { id: 3, title: "Trene", description: "Chest", author: "Blendi" }
    ];


    const [state, setState] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [author, setAuthor] = useState('');

    const [todos, setTodos] = useState(myList);
    const [completed, setCompleted] = useState([]);

    const handleAuthorChange = (e) => {
        setAuthor(e.target.value);
    }
    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    }
    const showModal = () => {

        setState(true);
    }
    const closeModal = () => {
        setState(false);
    }

    function guidGenerator() {
        var S4 = function () {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        };
        return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodos([{ id: guidGenerator(), title: title, description: description, author: author }, ...todos]);
        setState(false);
    }

    const removeTodo = (id) => {
        const newTodo = todos.filter((todo) => todo.id !== id);
        setTodos(newTodo);
    };

    const addComplete = (id) => {
        const newComplete = todos.filter((complete) => complete.id === id);
        console.log(newComplete);
        setCompleted(newComplete.concat(completed));
        removeTodo(id);
    };

    return (
        <>
             <div className="main__main">
                 
                <header className="header__wrapper">
                    <NavBar />

                </header>

                <div className="main__wrapper">

                    <Modall state={state} close={closeModal} handleAuthorChange={handleAuthorChange} handleDescriptionChange={handleDescriptionChange} handleTitleChange={handleTitleChange} handleSubmit={handleSubmit} setModalOpen={closeModal} />

                    <TodoButton modalHandler={showModal} />
                    {todos.length > 0 ? <TodoCardList list={todos} removeTodo={removeTodo} addComplete={addComplete} /> : <h2 className="no__todo">Jippi! Ingen todos i dag</h2>}

                </div>

                <div className="completed__wrapper">
                    <CompletedList completed={completed} />
                </div>
            </div>


        </>
    )

}
export default App;