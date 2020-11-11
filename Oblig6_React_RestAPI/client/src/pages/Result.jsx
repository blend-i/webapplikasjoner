import React, { useEffect, useState } from 'react';
import { Box, Heading, Flex, Text, Icon, Button, Checkbox } from '@chakra-ui/core';
import { list } from '../utils/pollService';

const Result = () => {
  const [polls, setPolls] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await list();
      if (error) {
        setError(error);
      } else {
        console.log(data);
        setPolls(data);
      }
    };
    fetchData();
  }, []);


  return (
    <section>
      <Heading marginLeft={"20px"} mb={2} as="h1" fontSize="xl">
        Results
      </Heading>
      {error && <p>{error}</p>}
      <Flex direction={"column"}>
        {polls &&
          polls.map((poll) => (
            <Box p="6" as="article" key={poll._id}>
              <Heading mb={2} as="h2" size="md" color="#007b5f">
                {poll.question}
              </Heading>
              <div fontSize="md" mb={2}>
              {poll.answers.map((answer) => {
                  if(answer.answer !== null){
                    return(
                      <Flex key={answer._id}>
                      <Text  width="200px"><Icon name="chevron-right" mr={2} />{answer.answer}</Text>
                      <Text  width="200px"><Icon name="chevron-right" mr={2} />{answer.votes}</Text>
                      </Flex>
                    )
                  }})
                }
                </div>
              <Text fontSize="sm" marginTop="10px" mb={2}>
                {new Date(poll.createdAt).toDateString()}
              </Text>
              <Text fontSize="lg"><Icon name="email" mr={2} />{}</Text>
            </Box>
          ))}
      </Flex>
      </section>
  );
};

export default Result;