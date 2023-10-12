import {
  Box,
  BoxProps,
  Flex,
  useColorModeValue,
  Link as ChakraLink,
  Text,
  CloseButton,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";

import { Teams } from "./Teams";
import { SoccerLeagues } from "constants/leagues";

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

export const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <ChakraLink href="/">
          <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
            Bets
          </Text>
        </ChakraLink>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {/* League sidebar Accordion */}
      <Box overflow="auto" height="90vh">
        <Accordion defaultIndex={[0]} allowMultiple>
          {SoccerLeagues.map(
            (league) =>
              league.enabled && (
                <AccordionItem key={league.name}>
                  <h2>
                    <AccordionButton>
                      <Flex>
                        <img src={`https://flagcdn.com/${league.flagSVGcode}.svg`} width="30" alt="England" />
                        <Text fontWeight={600} px={2}>
                          {league.name}
                        </Text>
                      </Flex>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Teams teams={league.teams} />
                  </AccordionPanel>
                </AccordionItem>
              ),
          )}
        </Accordion>
      </Box>
    </Box>
  );
};
