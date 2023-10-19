import { Link, useParams } from "react-router-dom";
import { Flex, Text } from "@chakra-ui/react";

import { ITeam } from "types/team";
import { SportsNames } from "constants/common";
import { SoccerLeagueCode } from "types/soccer/league";

interface ITeamsProps {
  teams: ITeam[];
  leagueCode: SoccerLeagueCode;
}

export const Teams = ({ teams, leagueCode }: ITeamsProps) => {
  const { teamName = "" } = useParams<{ teamName: string }>();

  return (
    <Flex direction="column">
      {teams.map((team) => {
        return (
          <Link key={team.name} to={`${SportsNames.Soccer}/${leagueCode}/team/${team.code}`}>
            <Flex
              bg={teamName === team.code ? "white" : "blue.300"}
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
