import React, { useState } from 'react';
import { Input, Button, List } from '@chakra-ui/core';
import Form from "../components/Form";
import Answer from "../components/Answer";
import { create } from "../utils/pollService";

const CreatePoll = () => {

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
               
                    <List>
                    <Input width="400px" size="md" focusBorderColor="#007b5f" placeholder="Question" type="text" onChange={handleQuestionChange} />
                    </List>
                    
                    
                    <List>
                    <Input width="400px" size="md" focusBorderColor="#007b5f" placeholder="Answer here" type="text" onChange={handleAnswerChange} />
                    </List>

                    <List>
                    <Input width="400px" size="md" focusBorderColor="#007b5f" placeholder="Answer here" type="text" onChange={handleAnswerChange2} />
                    </List>

                    <List>
                    <Input width="400px" size="md" focusBorderColor="#007b5f" placeholder="Answer here" type="text" onChange={handleAnswerChange3} />
                    </List>

                    <List>
                    <Input width="400px" size="md" focusBorderColor="#007b5f" placeholder="Answer here" type="text" onChange={handleAnswerChange4} />
                    </List>

                <Button onClick={handleSubmit}>Post</Button>
              
            </form>
        </div>
    )
}

export default CreatePoll;