import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { TeamHistoryFilter } from "components/Team-History-Filter";
import { GameDataType } from "constants/stats";

interface HomeTeamHistoryFilterProps {
  variable: string;
  games: GameDataType[];
}

const homeTeamHistoryFilter = ({ variable, games }: HomeTeamHistoryFilterProps) => {
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

export const TeamHistoryBody = (gameData: TeamHistoryBodyProps) => {
  const [value, setValue] = useState("hxPts"); // defaults to Home expected points
  const [homeData, setHomeData] = useState([]);
  const [awayData, setAwayData] = useState([]);

  useEffect(() => {
    setHomeData(homeTeamHistoryFilter(value, gameData));
    setAwayData(awayTeamHistoryFilter(value, gameData));
  }, [value, gameData]);

  return (
    <Box>
      <TeamHistoryFilter setFilterValue={setValue} filterValue={value} />
      {/* <TeamHistoryGraph homeData={homeData} awayData={awayData} /> */}
    </Box>
  );
};
