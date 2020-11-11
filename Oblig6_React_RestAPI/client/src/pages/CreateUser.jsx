import React, { useState } from 'react';
import { Input, Button, FormControl, FormLabel, FormHelperText, Flex } from '@chakra-ui/core';
import { create } from "../utils/userService.js";

const CreateUser = () => {

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
    }

    return (
        <div>
            <FormControl>
                <Flex>
                    <FormLabel htmlFor="email">Email address</FormLabel>
                    <Input width="400px" size="md" focusBorderColor="#007b5f" type="email" id="email" onChange={handleEmail} />
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <Input width="400px" size="md" focusBorderColor="#007b5f" type="password" id="password" onChange={handlePassword} />
                </Flex>
            </FormControl>
            <Button onClick={handleSubmit}>Submit</Button>             
        </div>
    )
    };

export default CreateUser;