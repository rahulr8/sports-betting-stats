import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

import Sidebar from "components/Sidebar";

const TeamPageLayout = () => {
  return (
    <Box>
      <Sidebar />
      <Box flex="1" ml={{ base: 0, md: 60 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default TeamPageLayout;
