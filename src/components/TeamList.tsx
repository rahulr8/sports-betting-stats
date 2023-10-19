import { Box, VStack, Text } from "@chakra-ui/react";

import { ITeam } from "types/team";

interface ITeamList {
  teams: ITeam[];
}

const TeamList = ({ teams }: ITeamList) => {
  return (
    <VStack align="start" spacing={4}>
      {teams.map((team) => (
        <Box key={team.id}>
          <Text fontWeight="medium">
            <img src={team.logoUrl} alt={`${team.name} logo`} width="30" /> {team.name}
          </Text>
        </Box>
      ))}
    </VStack>
  );
};

export default TeamList;
