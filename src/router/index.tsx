import { createBrowserRouter } from "react-router-dom";
import { BaseTemplate } from "../templates/base";
import { Suspense, lazy } from "react";

import HomeSkeleton from "src/pages/home/home.skeleton";
import Men from "src/templates/base/header/men";
import Woman from "src/templates/base/header/woman";
import Kid from "src/templates/base/header/kid";
import Sport from "src/templates/base/header/sport";

const Home = lazy(() => import("../pages/home"));
const Carts = lazy(() => import("../pages/carts"));
const Login = lazy(() => import("../pages/login"));
const Profile = lazy(() => import("../pages/profile"));
const Register = lazy(() => import("../pages/register"));
const Search = lazy(() => import("../pages/search"));
const Detail = lazy(() => import("../pages/detail"));
const a = 10;
export const router = createBrowserRouter([
  {
    element: <BaseTemplate />,
    children: [
      {
        index: true,
        path: "/",
        element: (
          <Suspense fallback={<HomeSkeleton />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "men",
        element: <Men />,
      },
      {
        path: "woman",
        element: <Woman />,
      },
      {
        path: "kid",
        element: <Kid />,
      },
      {
        path: "sport",
        element: <Sport />,
      },
      {
        path: "carts",
        element: <Carts/>,
      },
      {
        path: "login",
        element: (
          <Suspense fallback={<>Skeleton Login</>}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "detail/:productId",
        element: <Detail />,
      },
    ],
  },
]);
