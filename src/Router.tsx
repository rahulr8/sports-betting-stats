import { Suspense, lazy } from "react";
import { Outlet, RouteObject, useRoutes, BrowserRouter } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";

import TeamHistory from "containers/TeamHistory";
import SidebarWithHeader from "components/Sidebar";
import TeamMatchup from "containers/TeamMatchup";

const Loading = () => {
  return <Text>Loading...</Text>;
};

const IndexScreen = lazy(() => import("screens/Index"));
const Page404Screen = lazy(() => import("screens/404"));

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
          element: <TeamHistory />,
        },
        {
          path: "/matchup",
          element: <TeamMatchup />,
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
