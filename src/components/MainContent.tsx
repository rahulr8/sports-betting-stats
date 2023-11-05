// Create a component that returns the children wrapped in a Chakra Box component

import { Box } from "@chakra-ui/react";

interface IMainContentProps {
  children: React.ReactNode;
}

const MainContent = ({ children }: IMainContentProps) => {
  return (
    <Box pt={{ base: "20", md: "20" }} pl={{ md: "240px" }}>
      {children}
    </Box>
  );
};

export default MainContent;
