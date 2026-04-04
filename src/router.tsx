import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/home/home";
import NotFound from "./pages/not-found/not-found";
import RootLayout from "./layouts/root-layout";
import BinarySearch from "./pages/algorithms/binary-search/binary-search";
import BinaryTree from "./pages/algorithms/binary-tree/binary-tree";
import BubbleSort from "./pages/algorithms/bubble-sort/bubble-sort";
import DoublyLinkedList from "./pages/algorithms/doubly-linked-list/doubly-linked-list";
import Factorial from "./pages/algorithms/factorial/factorial";
import Fibonacci from "./pages/algorithms/fibonacci/fibonacci";
import Graph from "./pages/algorithms/graph/graph";
import HashTable from "./pages/algorithms/hash-table/hash-table";
import Heap from "./pages/algorithms/heap/heap";
import InsertionSort from "./pages/algorithms/insertion-sort/insertion-sort";
import LinearSearch from "./pages/algorithms/linear-search/linear-search";
import LinkedList from "./pages/algorithms/linked-list/linked-list";
import MargeSort from "./pages/algorithms/marge-sort/marge-sort";
import Queue from "./pages/algorithms/queue/queue";
import QuickSort from "./pages/algorithms/quick-sort/quick-sort";
import RemoveElement from "./pages/algorithms/remove-element/remove-element";
import SelectionSort from "./pages/algorithms/selection-sort/selection-sort";
import Stack from "./pages/algorithms/stack/stack";
import TestTask from "./pages/algorithms/test-task/test-task";
import TheeAlgs from "./pages/algorithms/thee-algs/thee-algs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "", element: <Home />, index: true },
      { path: "binary-search", element: <BinarySearch /> },
      { path: "binary-tree", element: <BinaryTree /> },
      { path: "bubble-sort", element: <BubbleSort /> },
      { path: "doubly-linked-list", element: <DoublyLinkedList /> },
      { path: "factorial", element: <Factorial /> },
      { path: "fibonacci", element: <Fibonacci /> },
      { path: "graph", element: <Graph /> },
      { path: "hash-table", element: <HashTable /> },
      { path: "heap", element: <Heap /> },
      { path: "insertion-sort", element: <InsertionSort /> },
      { path: "linear-search", element: <LinearSearch /> },
      { path: "linked-list", element: <LinkedList /> },
      { path: "marge-sort", element: <MargeSort /> },
      { path: "queue", element: <Queue /> },
      { path: "quick-sort", element: <QuickSort /> },
      { path: "remove-element", element: <RemoveElement /> },
      { path: "selection-sort", element: <SelectionSort /> },
      { path: "stack", element: <Stack /> },
      { path: "test-task", element: <TestTask /> },
      { path: "thee-algs", element: <TheeAlgs /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export const Routing = () => {
  return <RouterProvider router={router} />;
};
