import { useState } from "react";
import { Box, Collapse } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";

import { SoccerLeagues } from "constants/soccer/leagues";

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
  const navigate = useNavigate();

  return (
    <Box>
      <Box onClick={() => setSelectedSport(selectedSport ? null : 1)}>
        Sports {selectedSport ? <ChevronDownIcon /> : <ChevronRightIcon />}
      </Box>
      <Collapse in={!!selectedSport}>
        <Box pl={4}>
          {sportsData[0].leagues.map((league) => (
            <Box key={league.id} mt={2}>
              <Box onClick={() => setSelectedLeague(selectedLeague === league.id ? null : league.id)}>
                {league.name} {selectedLeague === league.id ? <ChevronDownIcon /> : <ChevronRightIcon />}
              </Box>
              <Collapse in={selectedLeague === league.id} pl={4}>
                {(sportsData[0].leagues.find((l) => l.id === league.id)?.teams || []).map((team) => (
                  <Box key={team.id} mt={2} onClick={() => navigate(`/team/${team.id}`)}>
                    {team.name}
                  </Box>
                ))}
              </Collapse>
            </Box>
          ))}
        </Box>
      </Collapse>
    </Box>
  );
};

export default Sidebar;
