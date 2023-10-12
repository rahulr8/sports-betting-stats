import { Box, useColorModeValue, Drawer, DrawerContent, useDisclosure } from "@chakra-ui/react";

import { MobileNav } from "./Mobile-Nav";
import { SidebarContent } from "./Sidebar-Content";

const Sidebar = () => {
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

      <MobileNav onOpen={onOpen} />
    </Box>
  );
};

export default Sidebar;
