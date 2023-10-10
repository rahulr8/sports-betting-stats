import { Link, useParams } from "react-router-dom";
import { FiMenu, FiChevronDown } from "react-icons/fi";
import {
  Flex,
  FlexProps,
  IconButton,
  Text,
  Link as ChakraLink,
  useColorModeValue,
  HStack,
  Menu,
  MenuButton,
  Box,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";

import { SignInButton } from "containers/SignInButton";
import { useAuthState } from "contexts/UserContext";
import SignOutButton from "containers/SignOutButton";
import { footballLeagues } from "constants/leagues";

interface MobileProps extends FlexProps {
  onOpen: () => void;
}

export const MobileNav = ({ onOpen }: MobileProps) => {
  const { state } = useAuthState();
  const { teamName } = useParams<{ teamName: string }>();
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="space-between"
    >
      {/* menu btn for smaller screens */}
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />
      <Flex display={{ base: "none", md: "flex" }} justifyContent="space-between" w={300}>
        {/* replace link redirects to states holding teams */}
        <Link to={`/team/${teamName || footballLeagues[0].teams[0].abreviation}`}>
          <Text mr={5} fontWeight={600} fontSize="large">
            Team history
          </Text>
        </Link>
        <Link
          to={`/matchup?team1=${teamName || footballLeagues[0].teams[0].abreviation}&team2=${
            footballLeagues[0].teams[1].abreviation
          }`}
        >
          <Text fontWeight={600} fontSize="large">
            Matchup history
          </Text>
        </Link>
      </Flex>
      {/* replace with logo */}
      <ChakraLink href="/">
        <Text display={{ base: "flex", md: "none" }} fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Bets
        </Text>
      </ChakraLink>
      <HStack spacing={{ base: "0", md: "6" }}>
        <Flex alignItems="center">
          <Menu>
            <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: "none" }}>
              <HStack>
                {state.state === "UNKNOWN" ? null : state.state === "SIGNED_OUT" ? <SignInButton /> : <SignOutButton />}
                <Box display={{ base: "flex", md: "none" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <MenuItem>Team History</MenuItem>
              <MenuItem>Team Matchup</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};
