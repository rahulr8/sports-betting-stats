import { Box, Spinner } from "@chakra-ui/react";

const LoadingSpinner = () => {
  return (
    <Box textAlign="center" mt="20%">
      <Spinner size="xl" />
    </Box>
  );
};

export default LoadingSpinner;
