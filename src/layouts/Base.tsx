import React from "react";
import { Box } from "@chakra-ui/react";

import { Header } from "components/Header";
import Sidebar from "components/Sidebar";

interface BaseLayoutProps {
  children: React.ReactNode;
}

// TODO: Do the styling of how to position sidebar and header here
const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  return (
    <Box minH="100vh" bg="gray.100">
      <Sidebar />
      <Box ml={60} p="4">
        <Header />
        {children}
      </Box>
    </Box>
  );
};

export default BaseLayout;
