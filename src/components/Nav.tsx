import { Link, useParams } from "react-router-dom";
import { FiMenu, FiChevronDown } from "react-icons/fi";
import {
  Flex,
  IconButton,
  Text,
  Link as ChakraLink,
  HStack,
  Menu,
  MenuButton,
  Box,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";

import { SoccerLeagues } from "constants/soccer/leagues";
import theme from "styles/theme";

interface NavProps {
  onOpen: () => void;
}

export const Nav = ({ onOpen }: NavProps) => {
  const { teamName = "" } = useParams<{ teamName: string }>();

  const leagueCode =
    SoccerLeagues.find((league) => league.teams.find((team) => team.code === teamName))?.code || SoccerLeagues[0].code;

  const teamHistoryLink = (
    <Link to={`soccer/${leagueCode}/team/${teamName || SoccerLeagues[0].teams[0].code}`}>
      <Text mr={5} fontWeight={600} fontSize="large" color="white">
        Team history
      </Text>
    </Link>
  );

  const matchupHistoryLink = (
    <Link
      to={`soccer/${leagueCode}/matchup/${teamName || SoccerLeagues[0].teams[0].code}-${
        SoccerLeagues[0].teams[1].code
      }`}
    >
      <Text fontWeight={600} fontSize="large" color="white">
        Matchup history
      </Text>
    </Link>
  );

  return (
    <Flex
      as="header"
      position="fixed"
      top="0"
      zIndex="sticky"
      left="0"
      right="0"
      height={theme.navHeight}
      px={{ base: 4, md: 4 }}
      ml={{ base: 0, md: "240px" }} // Adjust the value to match your sidebar's width
      alignItems="center"
      bgGradient="linear(to-r, blue.800, purple.700)"
      borderBottomWidth="1px"
      borderBottomColor="purple.900"
      justifyContent="space-between"
      width="full"
    >
      {/* menu btn for smaller screens */}
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
        color="white"
      />

      {/* Links for larger screens */}
      <Flex display={{ base: "none", md: "flex" }} justifyContent="space-between" w={300}>
        {teamHistoryLink}
        {matchupHistoryLink}
      </Flex>

      {/* Logo */}
      <ChakraLink href="/" _hover={{ textDecoration: "none" }}>
        <Text
          display={{ base: "flex", md: "none" }}
          fontSize="2xl"
          fontFamily="monospace"
          fontWeight="bold"
          color="white"
        >
          Bets
        </Text>
      </ChakraLink>

      {/* Dropdown Menu for smaller screens */}
      <HStack spacing={{ base: "0", md: "6" }}>
        <Flex alignItems="center">
          <Menu>
            <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: "none" }}>
              <HStack>
                <Box display={{ base: "flex", md: "none" }}>
                  <FiChevronDown color="white" />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList bgGradient="linear(to-b, gray.700, gray.900)" borderColor="gray.700">
              <MenuItem _hover={{ bg: "gray.600" }}>{teamHistoryLink}</MenuItem>
              <MenuItem _hover={{ bg: "gray.600" }}>{matchupHistoryLink}</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};
