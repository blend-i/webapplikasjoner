import React, { useState } from 'react';
import { Box, Heading, Flex, Text, Icon } from '@chakra-ui/core';
import Form from "../components/Form";
import Answer from "../components/Answer";
import { create } from "../utils/pollService";

const CreatePoll = () => {

    const [answerValue, setAnswerValue] = useState(null);
    const [answerValue2, setAnswerValue2] = useState(null);
    const [answerValue3, setAnswerValue3] = useState(null);
    const [answerValue4, setAnswerValue4] = useState(null);
    
    const [questionValue, setQuestionValue] = useState(null);
    const [correct, setCorrect] = useState(false);

    const handleAnswerChange = (e) => {
        setAnswerValue(e.target.value);
    }
    const handleAnswerChange2 = (e) => {
        setAnswerValue2(e.target.value);
    }
    const handleAnswerChange3 = (e) => {
        setAnswerValue3(e.target.value);
    }
    const handleAnswerChange4 = (e) => {
        setAnswerValue4(e.target.value);
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
            answers: [
                {answer: answerValue},
                {answer: answerValue2},
                {answer: answerValue3}, 
                {answer: answerValue4},
            ],
          };

        const createData = async () => {
            await create(data);
            }
            createData();
    }

    return (
        <div>
            <form>
                <ul className="form__ul">
                    <li>
                    <input defaultValue="Question" type="text" onChange={handleQuestionChange} />
                    </li>
                    
                    
                    <li>
                    <input defaultValue="Answer here" type="text" onChange={handleAnswerChange} />
                    </li>

                    <li>
                    <input defaultValue="Answer here" type="text" onChange={handleAnswerChange2} />
                    </li>

                    <li>
                    <input defaultValue="Answer here" type="text" onChange={handleAnswerChange3} />
                    </li>

                    <li>
                    <input defaultValue="Answer here" type="text" onChange={handleAnswerChange4} />
                    </li>

                </ul>
                <button onClick={handleSubmit}>Post</button>
              
            </form>
            <button onClick={handleTrue}> Set {correct.toString()}</button>
        </div>
    )
}

export default CreatePoll;