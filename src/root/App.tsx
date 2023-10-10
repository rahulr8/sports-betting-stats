import { HelmetProvider } from "react-helmet-async";
import { ErrorBoundary } from "react-error-boundary";
import { ChakraProvider } from "@chakra-ui/react";

import { AuthProvider } from "contexts/UserContext";
import Main from "root/Main";
import ErrorFallback from "components/Error-Fallback";

export const App = () => {
  return (
    <ErrorBoundary fallback={<ErrorFallback />} onReset={() => window.location.reload()}>
      <HelmetProvider>
        <AuthProvider>
          <ChakraProvider>
            <Main />
          </ChakraProvider>
        </AuthProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
};
