import { Suspense, lazy } from "react";
import { Outlet, RouteObject, useRoutes, BrowserRouter } from "react-router-dom";
import { Box, Spinner } from "@chakra-ui/react";

import SidebarWithHeader from "components/Sidebar";

const Loading = () => {
  // return centered loading spinner
  return (
    <Box textAlign="center" mt="20%">
      <Spinner size="xl" />
    </Box>
  );
};

const IndexScreen = lazy(() => import("screens/Index"));
const Page404Screen = lazy(() => import("screens/404"));
const TeamHistoryScreen = lazy(() => import("screens/TeamHistory"));
const TeamMatchupScreen = lazy(() => import("screens/TeamMatchup"));

function Layout() {
  return (
    <Box>
      <SidebarWithHeader />
      <Box flex="1" ml={{ base: 0, md: 60 }}>
        <Outlet />
      </Box>
    </Box>
  );
}

const InnerRouter = () => {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <IndexScreen />,
        },
        {
          path: "/team/:teamName",
          element: <TeamHistoryScreen />,
        },
        {
          path: "/matchup",
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
