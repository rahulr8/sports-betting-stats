import { lazy, Suspense } from "react";
import { Outlet, RouteObject, useRoutes, BrowserRouter } from "react-router-dom";

const Loading = () => <p className="p-4 w-full h-full text-center">Loading...</p>;

const IndexScreen = lazy(() => import("screens/Index"));
const Page404Screen = lazy(() => import("screens/404"));

function Layout() {
  return (
    <div>
      <nav className="p-4 flex items-center justify-between">
        <span>Some header component here</span>
      </nav>
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
