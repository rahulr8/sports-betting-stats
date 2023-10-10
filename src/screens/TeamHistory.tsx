import { Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { fetchMatchesForTeam } from "api/team";
import { teamAbreviation } from "constants/teams";

const TeamHistory: React.FC = () => {
  const { teamName = "" } = useParams<{ teamName: string }>();

  useEffect(() => {
    const teamApiName = teamAbreviation[teamName];
    fetchMatchesForTeam(teamApiName);
  }, [teamName]);

  return (
    <Flex textAlign="center">
      <h1>{teamName}</h1>
    </Flex>
  );
};

export default TeamHistory;
