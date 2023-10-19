import { Box, VStack, Text, Icon } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

import { ILeague } from "types/league";
import { SoccerLeague } from "types/soccer/league";

interface ILeagueMenu {
  leagues: ILeague[] | SoccerLeague[];
  onLeagueSelect: (leagueId: number) => void;
}

const LeagueMenu = ({ leagues, onLeagueSelect }: ILeagueMenu) => {
  return (
    <VStack align="start" spacing={4}>
      {leagues.map((league) => (
        <Box key={league.id} onClick={() => onLeagueSelect(league.id)}>
          <Text fontWeight="medium">{league.name}</Text>
          <Icon as={ChevronDownIcon} boxSize={4} />
        </Box>
      ))}
    </VStack>
  );
};

export default LeagueMenu;
