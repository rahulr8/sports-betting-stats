import React from "react";
import { useParams } from "react-router-dom";

import { Team } from "constants/leagues";
import { Flex, Link } from "@chakra-ui/react";

export const Teams = ({ teams }: { teams: Team[] }) => {
  const { teamName } = useParams<{ teamName: string }>();

  return (
    <Flex direction="column">
      {teams.map((team) => {
        return (
          <Flex bg={teamName === team.name ? 'white' : 'orange'} key={team.name} mx={2} my={1} border='1px solid black' px={2} borderRadius='md'>
            <Link href={`/team/${team.name}`}>{team.name}</Link>
          </Flex>
        );
      })}
    </Flex>
  );
};

