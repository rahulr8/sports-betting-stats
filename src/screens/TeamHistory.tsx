import { Flex, Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

import { teamAbreviation } from "constants/teams";
import TeamHistoryBody from "containers/TeamHistoryBody";
import { mockData } from "constants/stats";

// create array of objects mock data from GateDataType

const TeamHistory: React.FC = () => {
  const { teamName } = useParams<{ teamName: string }>();
  // make apiCall to get teamName's stats
  return (
    <Flex textAlign="center" direction="column">
      {/* only display if teamName is defined */}
      {teamName && <Heading>{teamAbreviation[teamName]}</Heading>}
      <TeamHistoryBody gameData={mockData} />
    </Flex>
  );
};

export default TeamHistory;
