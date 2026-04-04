import type { NavigationItem } from "../types/navigation-item";

const UseNavigationItems = () => {
  const navigationItems: NavigationItem[] = [
    {
      label: "Linked List",
      to: "/linked-list",
    },
    {
      label: "Doubly Linked List",
      to: "/doubly-linked-list",
    }
  ];

  return navigationItems;
};

export default UseNavigationItems;
