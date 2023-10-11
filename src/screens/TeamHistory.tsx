import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchMatchesForTeam } from "api/team";
import { TeamCode } from "constants/teams";
import { Match } from "types/match";

const TeamHistory: React.FC = () => {
  const { teamName = "" } = useParams<{ teamName: string }>();

  const [matches, setMatches] = useState<Match[]>([]);

  useEffect(() => {
    const teamApiName = TeamCode[teamName];
    fetchMatchesForTeam(teamApiName)
      .then((data) => {
        setMatches(data);
      })
      .catch((err) => console.log(err));
  }, [teamName]);

  return (
    <Flex textAlign="center">
      <h1>{teamName}</h1>
      {/* Just showing a big json dump for now */}
      {JSON.stringify(matches)}
    </Flex>
  );
};

export default TeamHistory;
