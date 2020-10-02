import React, { useState } from 'react';
import CompletedListItem from './CompletedListItem';
import Search from "./Search";


const CompletedList = ({ completed }) => {

    const [result, setResult] = useState([]);

    const [searched, setSearched] = useState([]);


    const handleSearch = (e) => {
        setResult(e.target.value);
    }

    const handleSearchClick = () => {
        completed.map((search) => search.title.toLowerCase() === result.toLowerCase() ? setSearched(search) : null);
    }

    return (
        <>
            <div className="search__container">
                <Search handleSearch={handleSearch} handleSearchClick={handleSearchClick} />

                <div className="search__result">
                    <h4>Search Results: </h4> <br /> <p> {searched.title} {searched.description} {searched.author} </p>
                </div>
            </div>


            <h3>Completed Todos</h3>

            <table className="completedTodoTable" >

                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Author</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {completed &&
                        completed.map((completed) => <CompletedListItem key={completed.id} {...completed} />)}
                </tbody>
            </table>
        </>
    );
};

export default CompletedList;
