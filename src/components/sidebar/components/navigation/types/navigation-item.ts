import type { NavLink } from "react-router";

export interface NavigationItem extends React.ComponentProps<typeof NavLink> {
  label: string;
}

export interface NavigationGroup {
  title: string;
  items: NavigationItem[];
}
