// BaseLayout.tsx or BaseLayout.jsx
import { Box, useDisclosure } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

import Sidebar from "components/Sidebar";
import { Nav } from "components/Nav";

const BaseLayout = () => {
  const { onOpen } = useDisclosure();

  return (
    <Box>
      <Nav onOpen={onOpen} />
      <Sidebar />
      <Box flex="1" ml={{ base: 0, md: 60 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default BaseLayout;
