import type { NavigationItem } from "../types/navigation-item";

const useNavigation = () => {
  const navigationItems: NavigationItem[] = [
    {
      label: "Linked List",
      to: "/linked-list",
    },
  ];

  return navigationItems;
};

export default useNavigation;
