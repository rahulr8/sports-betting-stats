import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

import Sidebar from "components/Sidebar";

const BaseLayout = () => {
  return (
    <Box>
      <Sidebar />
      <Box flex="1" ml={{ base: 0, md: 60 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default BaseLayout;
