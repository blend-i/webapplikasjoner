import React, { useState } from 'react';
import { Box, Heading, Flex, Text, Icon } from '@chakra-ui/core';
import Form from "../components/Form";
import Answer from "../components/Answer";
import { create } from "../utils/pollService";

const CreatePoll = () => {

    const [answerValue, setAnswerValue] = useState(null);
    const [questionValue, setQuestionValue] = useState(null);

    const [correct, setCorrect] = useState(false);

    const handleAnswerChange = (e) => {
        setAnswerValue(e.target.value);
        console.log("HEIHEIOHI")
    }

    const handleQuestionChange = (e) => {
        setQuestionValue(e.target.value);
    }

    const handleTrue = () => {
        setCorrect(!correct);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //const data = "{\"question\": "+`${questionValue},\n`+"\"answer\": " +`${answerValue}}`;

        const data = {
            question: questionValue,
            answers: [{
                answer: answerValue,
                correct: !correct
            }],
          };

        const createData = async () => {
            await create(data);
            }
            createData();
    }

    return (
        <div>
            <form>
                <input defaultValue="Question" type="text" onChange={handleQuestionChange} />
                <input defaultValue="Answer here" type="text" onChange={handleAnswerChange} />
                <button onClick={handleSubmit}>Post</button>
              
            </form>
            <button onClick={handleTrue}> Set {correct.toString()}</button>
        </div>
    )
}

export default CreatePoll;