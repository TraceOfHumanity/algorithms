import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/home/home";
import Linkedlist from "./algorithms/TS/linked-list/linked-list";
import NotFound from "./pages/not-found/not-found";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "linked-list", element: <Linkedlist /> },
  { path: "*", element: <NotFound /> },
]);

export const Routing = () => {
  return <RouterProvider router={router} />;
};
