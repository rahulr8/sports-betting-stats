import { Flex } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const TeamMatchup: React.FC = () => {
  const { teamMatchup } = useParams();

  const [team1, team2] = teamMatchup ? teamMatchup.split("-") : [];

  return (
    <Flex textAlign="center">
      <h1>
        {team1} vs. {team2}
      </h1>
    </Flex>
  );
};

export default TeamMatchup;
