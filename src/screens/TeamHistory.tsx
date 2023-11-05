import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchMatchesForTeam } from "api/soccer/team";
import { TeamCode } from "constants/soccer/teams";
import { Match } from "types/soccer/match";
import { SoccerLeagueCode } from "types/soccer/league";
import MainContent from "components/MainContent";

const TeamHistory: React.FC = () => {
  const { teamName = "", leagueCode = "" } = useParams<{ teamName: string; leagueCode: SoccerLeagueCode }>();

  const [matches, setMatches] = useState<Match[]>([]);

  useEffect(() => {
    const teamApiName = TeamCode[teamName];
    fetchMatchesForTeam(teamApiName, leagueCode)
      .then((data) => {
        setMatches(data);
      })
      .catch((err) => console.log(err));
  }, [teamName]);

  return (
    <MainContent>
      <h1>{teamName}</h1>
      {/* Just showing a big json dump for now */}
      {JSON.stringify(matches)}
    </MainContent>
  );
};

export default TeamHistory;
