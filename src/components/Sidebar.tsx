import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  HStack,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import { FiMenu, FiChevronDown } from "react-icons/fi";

import { footballLeagues } from "constants/leagues";
import { Teams } from "./Teams";
import { SignInButton } from "containers/SignInButton";
import { useAuthState } from "contexts/UserContext";
import SignOutButton from "containers/SignOutButton";

interface MobileProps extends FlexProps {
  onOpen: () => void;
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
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
      <Accordion defaultIndex={[0]} allowMultiple>
        {footballLeagues.map(
          (league) =>
            league.enabled && (
              <AccordionItem key={league.name}>
                <h2>
                  <AccordionButton>
                    <Flex>
                      <img src={`https://flagcdn.com/${league.flagSVGcode}.svg`} width="30" alt="England" />
                      <Text fontWeight={600} px={2}>
                        {league.name}{" "}
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
  );
};

const MobileNav = ({ onOpen }: MobileProps) => {
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
              <MenuDivider />
              <MenuItem>Team Matchup</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};

const SidebarWithHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box w="full" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent onClose={() => onClose} display={{ base: "none", md: "block" }} />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* {/* mobilenav  */}
      <MobileNav onOpen={onOpen} />
    </Box>
  );
};

export default SidebarWithHeader;
