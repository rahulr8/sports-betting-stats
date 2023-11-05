import { useState } from "react";
import { Box, Collapse } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";

import { SoccerLeagues } from "constants/soccer/leagues";
import LeagueMenu from "./LeagueMenu";

const sportsData = [
  {
    id: 1,
    name: "Football",
    leagues: SoccerLeagues,
  },
];

const Sidebar = () => {
  const [selectedSport, setSelectedSport] = useState<number | null>(1);
  const [selectedLeague, setSelectedLeague] = useState<number | null>(null);

  return (
    <Box>
      <Box onClick={() => setSelectedSport(selectedSport ? null : 1)} cursor="pointer" p={4} borderBottomWidth="1px">
        Sports {selectedSport ? <ChevronDownIcon /> : <ChevronRightIcon />}
      </Box>
      <Collapse in={!!selectedSport} animateOpacity>
        <Box pl={6}>
          <LeagueMenu
            leagues={sportsData[0].leagues}
            onLeagueSelect={(leagueId) => setSelectedLeague(selectedLeague === leagueId ? null : leagueId)}
          />
        </Box>
      </Collapse>
    </Box>
  );
};

export default Sidebar;
