import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { ErrorBoundary } from "react-error-boundary";

import { AuthProvider } from "contexts/UserContext";
import Main from "root/Main";
import ErrorFallback from "components/Error-Fallback";

export const App = () => {
  return (
    <ErrorBoundary fallback={<ErrorFallback />} onReset={() => window.location.reload()}>
      <HelmetProvider>
        <AuthProvider>
          <Main />
        </AuthProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
};
