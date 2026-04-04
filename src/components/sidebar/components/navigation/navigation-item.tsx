import { NavLink } from "react-router";
import type { NavigationItem as NavigationItemType } from "./types/navigation-item";
import { cn } from "../../../../utils/cn";

const NavigationItem = ({ item }: { item: NavigationItemType }) => {
  return (
    <>
      <NavLink
        className={({ isActive }) => cn(isActive && "bg-primary")}
        {...item}
      >
        {item.label}
      </NavLink>
    </>
  );
};

export default NavigationItem;
