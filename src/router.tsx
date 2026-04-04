import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/home/home";
import NotFound from "./pages/not-found/not-found";
import Linkedlist from "./pages/algorithms/linked-list/linked-list";
import RootLayout from "./layouts/root-layout";
import DoublyLinkedList from "./pages/algorithms/doubly-linked-list/doubly-linked-list";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "", element: <Home />, index: true },
      { path: "linked-list", element: <Linkedlist /> },
      { path: "doubly-linked-list", element: <DoublyLinkedList /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export const Routing = () => {
  return <RouterProvider router={router} />;
};
