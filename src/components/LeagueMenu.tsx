import { useState } from "react";
import { Box, VStack, Text, Icon, Collapse, HStack } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";

import { ILeague } from "types/league";
import { SoccerLeague, SoccerLeagueCode } from "types/soccer/league";
import TeamList from "./TeamList";

interface ILeagueMenu {
  leagues: ILeague[] | SoccerLeague[];
  onLeagueSelect: (leagueId: number) => void;
}

const LeagueMenu = ({ leagues, onLeagueSelect }: ILeagueMenu) => {
  const [selectedLeague, setSelectedLeague] = useState<number | null>(null);

  return (
    <VStack align="start" spacing={1}>
      {leagues.map((league) => (
        <Box key={league.id}>
          <HStack
            spacing={2}
            onClick={() => {
              onLeagueSelect(league.id);
              setSelectedLeague(selectedLeague === league.id ? null : league.id);
            }}
            cursor="pointer"
            p={2}
            _hover={{ bg: "gray.100" }}
            transition="background 0.2s"
          >
            <Text fontWeight="medium">{league.name}</Text>
            <Icon as={selectedLeague === league.id ? ChevronDownIcon : ChevronRightIcon} boxSize={4} />
          </HStack>
          <Collapse in={selectedLeague === league.id} animateOpacity>
            <Box pl={4}>
              <TeamList leagueCode={league.code as SoccerLeagueCode} teams={league.teams} />
            </Box>
          </Collapse>
        </Box>
      ))}
    </VStack>
  );
};

export default LeagueMenu;
