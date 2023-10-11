import { Flex, Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { TeamCode } from "constants/teams";
import TeamHistoryBody from "containers/TeamHistoryBody";
import { fetchMatchesForTeam } from "api/team";
import { Match } from "types/match";

const TeamHistory: React.FC = () => {
  const { teamName = "" } = useParams<{ teamName: string }>();

  const [matches, setMatches] = useState<Match[]>([]);

  useEffect(() => {
    const teamApiName = TeamCode[teamName];
    fetchMatchesForTeam(teamApiName)
      .then((data: Match[]) => {
        setMatches(data);
      })
      .catch((err) => console.log(err));
  }, [teamName]);

  return (
    <Flex textAlign="center" direction="column">
      {/* only display if teamName is defined */}
      {teamName && <Heading>{TeamCode[teamName]}</Heading>}
      <TeamHistoryBody gameData={matches} />
    </Flex>
  );
};

export default TeamHistory;
