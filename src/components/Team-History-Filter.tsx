import { Radio, RadioGroup, Stack } from "@chakra-ui/react";

import { statVariables } from "constants/stats";

type TeamHistoryFilterProps = {
  setFilterValue: (value: string) => void;
  filterValue: string;
};
export const TeamHistoryFilter = ({ setFilterValue, filterValue }: TeamHistoryFilterProps) => {
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
