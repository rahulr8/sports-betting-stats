import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import TeamHistoryFilter from "components/Team-History-Filter";
import TeamHistoryGraph from "components/Team-History-Graph";
import { Match, MatchKeys } from "types/match";

const homeTeamHistoryFilter = (variable: MatchKeys, games: Match[]) => {
  return games.map((game) => {
    return {
      awayTeam: game.awayTeam,
      value: game[variable],
    };
  });
};

interface TeamHistoryBodyProps {
  gameData: Match[];
}

interface HomeGameDataType {
  awayTeam: string;
  value: number | string;
}

const TeamHistoryBody = (props: TeamHistoryBodyProps) => {
  const { gameData } = props;
  const [value, setValue] = useState<MatchKeys>("hxPts"); // defaults to Home expected points
  const [homeData, setHomeData] = useState<HomeGameDataType[]>([]);
  // const [awayData, setAwayData] = useState([]);

  useEffect(() => {
    setHomeData(homeTeamHistoryFilter(value, gameData));
    // setAwayData(awayTeamHistoryFilter(value, gameData));
  }, [value, gameData]);
  console.log(homeData);
  return (
    <Flex direction="row">
      <TeamHistoryFilter setFilterValue={setValue} filterValue={value} />
      <TeamHistoryGraph homeData={homeData} />
    </Flex>
  );
};

export default TeamHistoryBody;
