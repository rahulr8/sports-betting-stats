import { VStack, Text, Flex, Image, LinkBox } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { SportsNames } from "constants/common";
import { ITeam } from "types/team";

interface ITeamList {
  leagueCode: string;
  teams: ITeam[];
}

const TeamList = ({ leagueCode, teams }: ITeamList) => {
  return (
    <VStack align="start" spacing={2}>
      {teams.map((team) => (
        <LinkBox
          as={Flex}
          key={team.id}
          align="center"
          width="100%"
          p={2}
          borderRadius="md"
          _hover={{ bg: "gray.100", color: "blue.500", cursor: "pointer" }}
          transition="background 0.2s, color 0.2s"
        >
          <Image src={team.logoUrl} alt={`${team.name} logo`} boxSize="24px" mr={2} />
          <Text isTruncated fontWeight="medium" flex={1}>
            <Link to={`/${SportsNames.Soccer}/${leagueCode}/team/${team.code}`}>{team.name}</Link>
          </Text>
        </LinkBox>
      ))}
    </VStack>
  );
};

export default TeamList;
