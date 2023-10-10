import { Box, Flex, Text } from "@chakra-ui/react";

interface TeamHistoryGraphProps {
  homeData: {
    awayTeam: string;
    value: number | string;
  }[];
}

const TeamHistoryGraph = (props: TeamHistoryGraphProps) => {
  const { homeData } = props;
  return (
    <Box>
      {homeData.map((game) => {
        return (
          <Flex key={game.awayTeam} direction="row">
            <Text>{game.awayTeam}: </Text>
            <Text>{game.value}</Text>
          </Flex>
        );
      })}
    </Box>
  );
};

export default TeamHistoryGraph;
