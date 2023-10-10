import { Flex } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const TeamHistory: React.FC = () => {
  const { teamName } = useParams<{ teamName: string }>();
  // make apiCall to get teamName's stats
  return (
    <Flex textAlign="center">
      <h1>{teamName}</h1>
    </Flex>
  );
};

export default TeamHistory;
