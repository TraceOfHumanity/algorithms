import type { NavigationItem } from "../types/navigation-item";

const UseNavigationItems = () => {
  const navigationItems: NavigationItem[] = [
    { label: "Binary Search", to: "/binary-search" },
    { label: "Binary Tree", to: "/binary-tree" },
    { label: "Bubble Sort", to: "/bubble-sort" },
    { label: "Doubly Linked List", to: "/doubly-linked-list" },
    { label: "Factorial", to: "/factorial" },
    { label: "Fibonacci", to: "/fibonacci" },
    { label: "Graph", to: "/graph" },
    { label: "Hash Table", to: "/hash-table" },
    { label: "Heap", to: "/heap" },
    { label: "Insertion Sort", to: "/insertion-sort" },
    { label: "Linear Search", to: "/linear-search" },
    { label: "Linked List", to: "/linked-list" },
    { label: "Marge Sort", to: "/marge-sort" },
    { label: "Queue", to: "/queue" },
    { label: "Quick Sort", to: "/quick-sort" },
    { label: "Remove Element", to: "/remove-element" },
    { label: "Selection Sort", to: "/selection-sort" },
    { label: "Stack", to: "/stack" },
    { label: "Test Task", to: "/test-task" },
    { label: "Thee Algs", to: "/thee-algs" },
  ];

  return navigationItems;
};

export default UseNavigationItems;
