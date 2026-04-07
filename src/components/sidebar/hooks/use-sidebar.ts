import type { SidebarProps } from "../types/sidebar";
import { useState } from "react";

const useSidebar = (): SidebarProps => {
  const [isOpen, setIsOpen] = useState(false);
  return { isOpen, setIsOpen };

}

export default useSidebar;