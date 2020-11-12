import React, { useState, useContext } from 'react';
import { Input, Button, List } from '@chakra-ui/core';
import { create } from "../utils/pollService";
import { GlobalContext } from '../../contexts/GlobalUserState';

const CreatePoll = () => {
    const email = useContext(GlobalContext);
    const [answerValue, setAnswerValue] = useState(null);
    const [answerValue2, setAnswerValue2] = useState(null);
    const [answerValue3, setAnswerValue3] = useState(null);
    const [answerValue4, setAnswerValue4] = useState(null);
    const [questionValue, setQuestionValue] = useState(null);
    
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
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            question: questionValue,
            user: email.state,
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
                <Input width="400px" size="md" focusBorderColor="#007b5f" placeholder="Question" type="text" onChange={handleQuestionChange} />
                <Input mt={"10px"} width="400px" size="md" focusBorderColor="#007b5f" placeholder="Answer here" type="text" onChange={handleAnswerChange} />
                <Input mt={"10px"} width="400px" size="md" focusBorderColor="#007b5f" placeholder="Answer here" type="text" onChange={handleAnswerChange2} />
                <Input mt={"10px"} width="400px" size="md" focusBorderColor="#007b5f" placeholder="Answer here" type="text" onChange={handleAnswerChange3} />
                <Input mt={"10px"} width="400px" size="md" focusBorderColor="#007b5f" placeholder="Answer here" type="text" onChange={handleAnswerChange4} />
                <Button 
                marginTop="20px" 
                marginLeft="20px" 
                _hover={{
                    bg: "#007b5f",
                    transform: "scale(1.06)",
                    borderColor: "#000000",}} 
                onClick={handleSubmit}>Submit</Button>  
            </form>
        </div>
    )
}

export default CreatePoll;