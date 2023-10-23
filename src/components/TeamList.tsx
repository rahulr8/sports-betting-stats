import { VStack, Text, Flex, Image } from "@chakra-ui/react";

import { ITeam } from "types/team";

interface ITeamList {
  teams: ITeam[];
}

const TeamList = ({ teams }: ITeamList) => {
  return (
    <VStack align="start" spacing={2}>
      {teams.map((team) => (
        <Flex key={team.id} align="center" width="100%" p={1}>
          <Image src={team.logoUrl} alt={`${team.name} logo`} boxSize="24px" mr={2} />
          <Text isTruncated fontWeight="medium" flex={1}>
            {team.name}
          </Text>
        </Flex>
      ))}
    </VStack>
  );
};

export default TeamList;
