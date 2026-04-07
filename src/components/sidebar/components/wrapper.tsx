import Card from "../../ui/card/card";
import { cn } from "../../../utils/cn";
import { SidebarContext } from "../context/sidebar";
import useSidebar from "../hooks/use-sidebar";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const sidebar = useSidebar();
  return (
    <SidebarContext.Provider value={sidebar}>
      <Card
        className={cn(
          sidebar.isOpen ? "" : "h-fit",
          "transition-all duration-300",
        )}
      >
        {children}
      </Card>
    </SidebarContext.Provider>
  );
};

export default Wrapper;
