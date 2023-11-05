import { Box, VStack, Text, Icon } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons"; // You might need to install this

import { ISports } from "constants/common";

interface ISportMenu {
  sports: ISports[];
  onSportSelect: (sportId: number) => void;
}

const SportMenu = ({ sports, onSportSelect }: ISportMenu) => {
  return (
    <VStack align="start" spacing={4}>
      {sports.map((sport) => (
        <Box key={sport.id} onClick={() => onSportSelect(sport.id)}>
          <Text fontWeight="medium">{sport.name}</Text>
          <Icon as={ChevronDownIcon} boxSize={4} />
        </Box>
      ))}
    </VStack>
  );
};

export default SportMenu;
