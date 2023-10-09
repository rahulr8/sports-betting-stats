import React from "react";
import { Flex } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

import BaseLayout from "layouts/Base";

const TeamHistory: React.FC = () => {
  const { teamName } = useParams<{ teamName: string }>();
  // make apiCall to get teamName's stats
  // You can use the team name here for API call like you suggested
  return (
    <BaseLayout>
      <Flex textAlign="center">
        <h1>{teamName}</h1>
      </Flex>
    </BaseLayout>
  );
};

export default TeamHistory;
