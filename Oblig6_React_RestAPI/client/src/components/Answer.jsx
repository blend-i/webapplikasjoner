import React, {useState} from 'react';

export const Answer = ({handleAnswerChange}) => {

    //const [correct, setCorrect] = useState(false);
    return (
        <input type="text" onChange={handleAnswerChange}/>
    )
}

export default Answer;