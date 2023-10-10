import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import TeamHistoryFilter from "components/Team-History-Filter";
import { GameDataKeys, GameDataType } from "constants/stats";
import TeamHistoryGraph from "components/Team-History-Graph";

const homeTeamHistoryFilter = (variable: GameDataKeys, games: GameDataType[]) => {
  return games.map((game) => {
    return {
      awayTeam: game.awayTeam,
      value: game[variable],
    };
  });
};

interface TeamHistoryBodyProps {
  gameData: GameDataType[];
}

interface HomeGameDataType {
  awayTeam: string;
  value: number | string;
}

const TeamHistoryBody = (props: TeamHistoryBodyProps) => {
  const { gameData } = props;
  const [value, setValue] = useState<GameDataKeys>("hxPts"); // defaults to Home expected points
  const [homeData, setHomeData] = useState<HomeGameDataType[]>([]);
  // const [awayData, setAwayData] = useState([]);
  console.log(value);
  useEffect(() => {
    setHomeData(homeTeamHistoryFilter(value, gameData));
    // setAwayData(awayTeamHistoryFilter(value, gameData));
  }, [value, gameData]);

  return (
    <Flex direction="row">
      <TeamHistoryFilter setFilterValue={setValue} filterValue={value} />
      <TeamHistoryGraph homeData={homeData} />
    </Flex>
  );
};

export default TeamHistoryBody;
