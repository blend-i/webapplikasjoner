import React, { useEffect, useState } from 'react';
import { Box, Heading, Flex, Text, Icon, List, Checkbox, Button } from '@chakra-ui/core';
import { list } from '../utils/pollService';
import { LiStyle } from '../styled/Styled';
import { update } from "../utils/pollService";

const Polls = () => {
  const [polls, setPolls] = useState();
  const [error, setError] = useState(null);
  const [chosenAnswers, setChosenAnswers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await list();
      if (error) {
        setError(error);
      } else {
        //console.log(data);
        setPolls(data);
      }
    };
    fetchData();
  }, []);

  const handleChecked = (answer) => {
    chosenAnswers.map((ans) => {
      if(ans === answer){
        removeAnswer(answer);
        return;
      }},
      setChosenAnswers([answer, ...chosenAnswers]));
  }

  const removeAnswer = (toRemove) => {
    console.log("removing..." + toRemove.answer);
    const removed = chosenAnswers.filter((a) => a !== toRemove);
    setChosenAnswers([...removed]);
  }

  const handleSubmitAnswer = (e) => {
    console.log("totalAnswers");
    console.log(chosenAnswers);
    const updateVotes = async () => {
      chosenAnswers.map((ans) => {
        update(e.target.id, ans)
      })
    };
    updateVotes();
  chosenAnswers.map((ans) => removeAnswer(ans));
  }

  return (
    <section>
      <Heading marginLeft={"20px"} mb={2} as="h1" size="md">
        Polls
      </Heading>
      {error && <p>{error}</p>}
      <Flex direction={"column"}>
        {polls &&
          polls.map((poll) => (
            <Box p="6" as="article" key={poll.id}>
              <Heading mb={2} as="h2" size="sm">
                {poll.question}
              </Heading>
              <div fontSize="lg" mb={2}>
                {poll.answers.map((answer) => {
                  if(answer.answer !== null){
                    return(
                      <Flex key={answer._id} >
                        <Text><Icon name="chevron-right" mr={2} />{answer.answer}</Text>
                        <Checkbox marginLeft={"10px"} variantColor={"green"} name={"checkbox"}  onChange={() => handleChecked(answer)}/>
                      </Flex>
                    )
                  }})
                }
              </div>
              <Text fontSize="lg" mb={2}>
                <Icon name="time" mr={2} />
                {new Date(poll.createdAt).toDateString()}
              </Text>
              <Text fontSize="lg">By: {poll.email}</Text>
              <Button 
                marginTop="20px"  
                _hover={{
                    bg: "#007b5f",
                    transform: "scale(1.06)",
                    borderColor: "#000000",}} 
                onClick={handleSubmitAnswer}>Submit</Button>  
            </Box>
          ))}
      </Flex>
    </section>
  );
};

export default Polls;