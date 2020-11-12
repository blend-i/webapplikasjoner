import React, { useState, useContext } from 'react';
import { Input, Button, FormControl, FormLabel, FormHelperText, Flex } from '@chakra-ui/core';
import { create } from "../utils/userService.js";
import { GlobalContext } from '../../contexts/GlobalUserState.jsx';

const CreateUser = () => {

    const test = useContext(GlobalContext);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //const data = "{\"question\": "+`${questionValue},\n`+"\"answer\": " +`${answerValue}}`;
        const data = {
            email: email,
            password: password
          };

        const createData = async () => {
            await create(data);
            }
            createData();   
            
            console.log(email);
            test.updateState(data.email);
    }

    return (
        <div>
            <FormControl marginLeft={"20px"}>
                <FormLabel marginBottom={3} htmlFor="email">Email address</FormLabel>
                <Input width="400px" size="md" focusBorderColor="#007b5f" type="email" id="email" onChange={handleEmail} />
                <FormLabel marginBottom={3} marginTop={3} htmlFor="password">Password</FormLabel>
                <Input width="400px" size="md" focusBorderColor="#007b5f" type="password" id="password" onChange={handlePassword} />
            </FormControl>
            <Button 
                marginTop="20px" 
                marginLeft="20px" 
                _hover={{
                    bg: "#007b5f",
                    transform: "scale(1.06)",
                    borderColor: "#000000",}} 
                onClick={handleSubmit}>Submit</Button>              
        </div>
    )
    };

export default CreateUser;