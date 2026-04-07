import { Icon } from "../../ui/icon/icon";

const Header = ({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (isOpen: boolean) => void }) => {
  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        <Icon name="close" />
      </button>
    </div>
  )
}

export default Header;