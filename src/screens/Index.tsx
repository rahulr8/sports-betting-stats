import React, { Box } from "@chakra-ui/react";
import { useEffect } from "react";

import { fetchMatchesForTeam } from "../api/team";

function Index() {
  // main page to be styled
  // Make an API call here
  useEffect(() => {
    fetchMatchesForTeam("Arsenal");
  }, []);

  return (
    <Box>
      <h1>Home Page</h1>
      <Box>Premier League matchups</Box>
      {/* list table too */}
    </Box>
  );
}

export default Index;
