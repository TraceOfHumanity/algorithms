import { Icon } from "../../ui/icon/icon";

const Header = ({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (isOpen: boolean) => void }) => {
  return (
    <div className="flex items-center w-full">
      <button className="ml-auto" onClick={() => setIsOpen(!isOpen)}>
        <Icon name={isOpen ? "close" : "menu"} />
      </button>
    </div>
  )
}

export default Header;