import { Box, Button } from "@chakra-ui/react";

function ErrorFallback() {
  return (
    <Box>
      <h1>Something went wrong.</h1>
      <p>Try refreshing the page.</p>
      <Button onClick={() => window.location.reload()}>Refresh</Button>
    </Box>
  );
}

export default ErrorFallback;
