import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/home/home";
import NotFound from "./pages/not-found/not-found";
import Linkedlist from "./pages/algorithms/linked-list/linked-list";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "linked-list", element: <Linkedlist /> },
  { path: "*", element: <NotFound /> },
]);

export const Routing = () => {
  return <RouterProvider router={router} />;
};
