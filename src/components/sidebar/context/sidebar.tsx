import { createContext, useContext } from "react";
import type { SidebarProps } from "../types/sidebar";

export const SidebarContext = createContext<SidebarProps | undefined>(undefined);

export const useSidebarContext = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebarContext must be used within a SidebarContext");
  }
  return context;
};