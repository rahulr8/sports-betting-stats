import { Suspense, lazy } from "react";
import { RouteObject, useRoutes, BrowserRouter } from "react-router-dom";

import BaseLayout from "layouts/Base";
import LoadingSpinner from "components/Loading-Spinner";
import { Sports } from "constants/common";

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
          path: `${Sports.Soccer}/:leagueCode/team/:teamName`,
          element: <TeamHistoryScreen />,
        },
        {
          path: `${Sports.Soccer}/:leagueCode/matchup/:teamMatchup`,
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
      <Suspense fallback={<LoadingSpinner />}>{element}</Suspense>
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
