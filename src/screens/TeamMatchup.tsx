import { Box, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { TeamCode } from "constants/soccer/teams";
import { SoccerLeagueCode } from "types/soccer/league";
import { Match } from "types/soccer/match";
import { fetchRecentMatchups } from "api/soccer/team";

const TeamMatchup: React.FC = () => {
  const { teamMatchup = "", leagueCode = "" } = useParams<{ teamMatchup: string; leagueCode: SoccerLeagueCode }>();

  const [team1, team2] = teamMatchup ? teamMatchup.split("-") : [];

  const [matches, setMatches] = useState<Match[]>([]);

  useEffect(() => {
    const teamName1 = TeamCode[team1];
    const teamName2 = TeamCode[team2];
    fetchRecentMatchups(teamName1, teamName2, leagueCode)
      .then((data) => {
        setMatches(data);
      })
      .catch((err) => console.log(err));
  }, [teamMatchup]);

  return (
    <Flex textAlign="center" direction="column">
      <h1>
        {team1} vs. {team2}
      </h1>
      <Flex align="center" direction="column">
        {matches.map((match) => (
          <Flex key={match.id}>
            <Box mr={2}>{match.homeTeam}</Box>
            <Box mr={1}>{match.fthg}</Box>
            <Box ml={1}>{match.ftag}</Box>
            <Box ml={2}>{match.awayTeam}</Box>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default TeamMatchup;
