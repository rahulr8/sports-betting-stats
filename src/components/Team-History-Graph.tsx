import { Box, Flex, Heading, Text } from "@chakra-ui/react";

interface TeamHistoryGraphProps {
  gameData: {
    team: string;
    value: number | string;
    home: boolean;
  }[];
}

const TeamHistoryGraph = (props: TeamHistoryGraphProps) => {
  const { gameData } = props;
  const { homeMatches, awayMatches } = gameData.reduce(
    (
      result: {
        homeMatches: { team: string; value: number | string; home: boolean }[];
        awayMatches: { team: string; value: number | string; home: boolean }[];
      },
      match,
    ) => {
      if (match.home) {
        result.homeMatches.push(match);
      } else {
        result.awayMatches.push(match);
      }
      return result;
    },
    { homeMatches: [], awayMatches: [] },
  );
  // sort homeMatches and awayMatches alphabetically by team
  const displayHomeMatches = homeMatches.sort((a, b) => {
    return a.team.localeCompare(b.team);
  });
  const displayAwayMatches = awayMatches.sort((a, b) => {
    return a.team.localeCompare(b.team);
  });

  return (
    <Box>
      <Heading>HOME</Heading>
      {displayHomeMatches.map((game) => {
        return (
          <Flex key={game.team + game.home} direction="row">
            <Text>{game.team}: </Text>
            <Text>{game.value}</Text>
          </Flex>
        );
      })}
      <Heading>AWAY</Heading>
      {displayAwayMatches.map((game) => {
        return (
          <Flex key={game.team + game.home} direction="row">
            <Text>{game.team}: </Text>
            <Text>{game.value}</Text>
          </Flex>
        );
      })}
    </Box>
  );
};

export default TeamHistoryGraph;
