import type { NavigationGroup } from "../types/navigation-item";

const UseNavigationItems = () => {
  const dataStructures: NavigationGroup = {
    title: "Структури даних",
    items: [
      { label: "Binary Tree", to: "/binary-tree" },
      { label: "Doubly Linked List", to: "/doubly-linked-list" },
      { label: "Graph", to: "/graph" },
      { label: "Hash Table", to: "/hash-table" },
      { label: "Heap", to: "/heap" },
      { label: "Linked List", to: "/linked-list" },
      { label: "Queue", to: "/queue" },
      { label: "Stack", to: "/stack" },
    ],
  };

  const algorithms: NavigationGroup = {
    title: "Алгоритми",
    items: [
      { label: "Binary Search", to: "/binary-search" },
      { label: "Bubble Sort", to: "/bubble-sort" },
      { label: "Factorial", to: "/factorial" },
      { label: "Insertion Sort", to: "/insertion-sort" },
      { label: "Linear Search", to: "/linear-search" },
      { label: "Marge Sort", to: "/marge-sort" },
      { label: "Quick Sort", to: "/quick-sort" },
      { label: "Selection Sort", to: "/selection-sort" },
    ],
  };

  return { dataStructures, algorithms };
};

export default UseNavigationItems;
