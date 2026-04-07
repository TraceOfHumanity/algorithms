import { useState } from "react";
import Card from "../ui/card/card";
import Header from "./components/header";
import Navigation from "./components/navigation/navigation";
import { cn } from "../../utils/cn";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Card className={cn(isOpen ? "" : "h-fit", "transition-all duration-300")}>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && (
        <Navigation />
      )}
    </Card>
  );
};

export default Sidebar;
