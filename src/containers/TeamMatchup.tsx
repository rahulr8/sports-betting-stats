import React from "react";
import { Flex } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const TeamMatchup: React.FC = () => {
  const { team1, team2 } = useParams<{ team1: string, team2: string }>();
  // make apiCall to get teamName's stats
  return (
    <Flex textAlign='center'>
      <h1>{team1} vs. {team2}</h1>
    </Flex>
  );
};

export default TeamMatchup;
