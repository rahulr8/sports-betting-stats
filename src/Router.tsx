import React, { lazy, Suspense } from "react";
import { Outlet, RouteObject, useRoutes, BrowserRouter } from "react-router-dom";

import Sidebar from "components/Sidebar";
import TeamHistory from "containers/TeamHistory";
import SidebarWithHeader from "components/Sidebar";

const Loading = () => <p className="p-4 w-full h-full text-center">Loading...</p>;

const IndexScreen = lazy(() => import("screens/Index"));
const Page404Screen = lazy(() => import("screens/404"));

function Layout() {
  return (
    <div>
      <SidebarWithHeader />
      <Outlet />
    </div>
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
          path: "/matchup/:team1&:team2",
          element: <TeamHistory />,
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
