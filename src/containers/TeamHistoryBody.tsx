import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import TeamHistoryFilter from "components/Team-History-Filter";
import TeamHistoryGraph from "components/Team-History-Graph";
import { Match, MatchKeys } from "types/match";

const teamHistoryFilter = (variable: MatchKeys, games: Match[], team: string) => {
  return games.map((game) => {
    return {
      team: team === game.homeTeam ? game.awayTeam : game.homeTeam,
      value: game[variable],
      home: team === game.homeTeam,
    };
  });
};

interface TeamHistoryBodyProps {
  gameData: Match[];
  team: string;
}

interface GameDataType {
  team: string;
  value: number | string;
  home: boolean;
}

const TeamHistoryBody = (props: TeamHistoryBodyProps) => {
  const { gameData, team } = props;
  const [value, setValue] = useState<MatchKeys>("hxPts"); // defaults to Home expected points
  const [homeData, setHomeData] = useState<GameDataType[]>([]);

  useEffect(() => {
    setHomeData(teamHistoryFilter(value, gameData, team));
  }, [value, gameData]);

  return (
    <Flex direction="row">
      <TeamHistoryFilter setFilterValue={setValue} filterValue={value} />
      <TeamHistoryGraph gameData={homeData} />
    </Flex>
  );
};

export default TeamHistoryBody;
