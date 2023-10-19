import { useState } from "react";
import { Box } from "@chakra-ui/react";

import SportMenu from "./SportMenu";
import LeagueMenu from "./LeagueMenu";
import TeamList from "./TeamList";
import { SoccerLeagues } from "constants/soccer/leagues";
import { SoccerLeague } from "types/soccer/league";
import { ITeam } from "types/team";

interface ISport {
  id: number;
  name: string;
  leagues: SoccerLeague[];
}

const sportsData: ISport[] = [
  {
    id: 1,
    name: "Football",
    leagues: SoccerLeagues,
  },
];

const Sidebar = () => {
  const [selectedSport, setSelectedSport] = useState<number | null>(null);
  const [selectedLeague, setSelectedLeague] = useState<number | null>(null);

  const handleSportSelect = (sportId: number) => {
    setSelectedSport(sportId);
    setSelectedLeague(null);
  };

  const handleLeagueSelect = (leagueId: number) => {
    setSelectedLeague(leagueId);
  };

  const selectedSportData = sportsData.find((s) => s.id === selectedSport);
  const leagues: SoccerLeague[] = selectedSportData?.leagues || [];
  const selectedLeagueData = leagues.find((l) => l.id === selectedLeague);
  const teams: ITeam[] = selectedLeagueData?.teams || [];

  return (
    <Box>
      <SportMenu sports={sportsData} onSportSelect={handleSportSelect} />
      {selectedSport && <LeagueMenu leagues={leagues} onLeagueSelect={handleLeagueSelect} />}
      {selectedLeague && <TeamList teams={teams} />}
    </Box>
  );
};

export default Sidebar;
