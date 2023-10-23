import { useState } from "react";
import { Box, VStack, Text, Icon, Collapse, HStack } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";

import { ILeague } from "types/league";
import { SoccerLeague } from "types/soccer/league";
import TeamList from "./TeamList";

interface ILeagueMenu {
  leagues: ILeague[] | SoccerLeague[];
  onLeagueSelect: (leagueId: number) => void;
}

const LeagueMenu = ({ leagues, onLeagueSelect }: ILeagueMenu) => {
  const [selectedLeague, setSelectedLeague] = useState<number | null>(null);

  return (
    <VStack align="start" spacing={4}>
      {leagues.map((league) => (
        <Box key={league.id}>
          <HStack
            spacing={2}
            onClick={() => {
              onLeagueSelect(league.id);
              setSelectedLeague(selectedLeague === league.id ? null : league.id);
            }}
            cursor="pointer"
          >
            <Text fontWeight="medium">{league.name}</Text>
            <Icon as={selectedLeague === league.id ? ChevronDownIcon : ChevronRightIcon} boxSize={4} />
          </HStack>
          <Collapse in={selectedLeague === league.id}>
            <TeamList teams={league.teams} />
          </Collapse>
        </Box>
      ))}
    </VStack>
  );
};

export default LeagueMenu;
