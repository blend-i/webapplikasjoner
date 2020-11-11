import React, { useEffect, useState } from 'react';
import { Box, Heading, Flex, Text, Icon } from '@chakra-ui/core';
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

    /*chosenAnswers.map((ans) => {
      if(ans.id === e.target.id) {
        console.log(e.target.id);
        removeAnswer(e.target.id);
        return
      }
      
    },
    setChosenAnswers([e.target.id, ...chosenAnswers]));
    */
    console.log(answer);

    /*chosenAnswers.map((ans) => {
      if(ans._id === answer._id){
        removeAnswer(answer);
      }
    })
*/
    setChosenAnswers([answer, ...chosenAnswers]);

    console.log(chosenAnswers);
    
  }

  /*const removeAnswer = (toRemove) => {
    const removed = chosenAnswers.filter((a) => a._id !== toRemove._id);
    setChosenAnswers([...removed]);
  }
*/

  const handleSubmitAnswer = (e) => {
    console.log("Disse svarene skal være de som er krysset av nå");
    console.log(chosenAnswers);

    console.log(e.target.id)

    const updateVotes = async () => {
      chosenAnswers.map((ans) => {
        update(e.target.id, ans)
      })
    };

    updateVotes();

  //chosenAnswers.map((ans) => removeAnswer(ans));
  }

  return (
    <section>
      <Heading mb={2} as="h1" size="md">
        Polls page
      </Heading>
      {error && <p>{error}</p>}
      <Flex direction={"column"}>
        {polls &&
          polls.map((poll) => (
            <Box p="6" as="article" key={poll.id}>
              <Heading mb={2} as="h2" size="sm">
                {poll.question}
              </Heading>
              <Text fontSize="lg" mb={2}>
                {poll.answers.map((answer) => (
                  <LiStyle key={answer._id}>
                  <label>
                    {answer.answer}
                    <input  type="checkbox" name={"checkbox"}  onChange={() => handleChecked(answer)}/>
                  </label>
                  </LiStyle>
                ))
                }
              </Text>
              <Text fontSize="lg" mb={2}>
                <Icon name="time" mr={2} />
                {new Date(poll.createdAt).toDateString()}
              </Text>
              <Text fontSize="lg">By: {poll.email}</Text>
              <button id={poll.id} onClick={handleSubmitAnswer}>CLICK HERE TO VOTE </button>
            </Box>
          ))}
      
      </Flex>
    </section>
  );
};

export default Polls;