import { Icon } from "../../ui/icon/icon";
import { useSidebarContext } from "../context/sidebar";

const Header = () => {
  const { isOpen, setIsOpen } = useSidebarContext();
  return (
    <div className="flex items-center w-full">
      <button className="ml-auto" onClick={() => setIsOpen(!isOpen)}>
        <Icon name={isOpen ? "close" : "menu"} />
      </button>
    </div>
  );
};

export default Header;
