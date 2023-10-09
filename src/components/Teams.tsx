import { Link, useParams } from "react-router-dom";
import { Flex, Text } from "@chakra-ui/react";

import { Team } from "constants/leagues";

export const Teams = ({ teams }: { teams: Team[] }) => {
  const { teamName } = useParams<{ teamName: string }>();

  return (
    <Flex direction="column">
      {teams.map((team) => {
        return (
          <Link key={team.name} to={`/team/${team.name}`}>
            <Flex
              bg={teamName === team.name ? "white" : "blue.300"}
              key={team.name}
              mx={2}
              my={1}
              border="1px solid black"
              px={2}
              borderRadius="md"
            >
              <Text fontWeight={400}>{team.name}</Text>
            </Flex>
          </Link>
        );
      })}
    </Flex>
  );
};
