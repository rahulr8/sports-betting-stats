import { Radio, RadioGroup, Stack } from "@chakra-ui/react";

import { FilteringStatsArray } from "constants/stats";
import { MatchKeys } from "types/match";

type TeamHistoryFilterProps = {
  setFilterValue: (value: MatchKeys) => void;
  filterValue: string;
};
const TeamHistoryFilter = ({ setFilterValue, filterValue }: TeamHistoryFilterProps) => {
  return (
    <RadioGroup onChange={setFilterValue} value={filterValue}>
      <Stack direction="column">
        {FilteringStatsArray.map((stat) => {
          return (
            <Radio key={stat.value} value={stat.value}>
              {stat.label}
            </Radio>
          );
        })}
      </Stack>
    </RadioGroup>
  );
};

export default TeamHistoryFilter;
