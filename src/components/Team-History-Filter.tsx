import { Radio, RadioGroup, Stack } from "@chakra-ui/react";

import { GameDataKeys, statVariables } from "constants/stats";

type TeamHistoryFilterProps = {
  setFilterValue: (value: GameDataKeys) => void;
  filterValue: string;
};
const TeamHistoryFilter = ({ setFilterValue, filterValue }: TeamHistoryFilterProps) => {
  return (
    <RadioGroup onChange={setFilterValue} value={filterValue}>
      <Stack direction="column">
        {statVariables.map((stat) => {
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
