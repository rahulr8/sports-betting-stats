import { Suspense, lazy } from "react";
import { RouteObject, useRoutes, BrowserRouter } from "react-router-dom";
import { Box, Spinner } from "@chakra-ui/react";

import BaseLayout from "layouts/Base";

const Loading = () => {
  // return centered loading spinner
  return (
    <Box textAlign="center" mt="20%">
      <Spinner size="xl" />
    </Box>
  );
};

// Screens List
const IndexScreen = lazy(() => import("screens/Index"));
const Page404Screen = lazy(() => import("screens/404"));
const TeamHistoryScreen = lazy(() => import("screens/TeamHistory"));
const TeamMatchupScreen = lazy(() => import("screens/TeamMatchup"));

const InnerRouter = () => {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: <BaseLayout />,
      children: [
        {
          index: true,
          element: <IndexScreen />,
        },
        {
          path: "soccer/team/:teamName",
          element: <TeamHistoryScreen />,
        },
        {
          path: "soccer/matchup/:teamMatchup",
          element: <TeamMatchupScreen />,
        },
        {
          path: "*",
          element: <Page404Screen />,
        },
      ],
    },
  ];
  const element = useRoutes(routes);
  return (
    <div>
      <Suspense fallback={<Loading />}>{element}</Suspense>
    </div>
  );
};

export const Router = () => {
  return (
    <BrowserRouter>
      <InnerRouter />
    </BrowserRouter>
  );
};
