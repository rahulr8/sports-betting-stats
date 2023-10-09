import { Flex } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

const TeamMatchup: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const team1 = searchParams.get("team1");
  const team2 = searchParams.get("team2");

  return (
    <Flex textAlign="center">
      <h1>
        {team1} vs. {team2}
      </h1>
    </Flex>
  );
};

export default TeamMatchup;
