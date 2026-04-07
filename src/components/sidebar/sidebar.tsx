import { useState } from "react";
import Card from "../ui/card/card";
import Header from "./components/header";
import Navigation from "./components/navigation/navigation";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Card>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <Navigation />
    </Card>
  );
};

export default Sidebar;
