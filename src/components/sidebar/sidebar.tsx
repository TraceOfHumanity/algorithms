import Header from "./components/header";
import Navigation from "./components/navigation/navigation";
import Wrapper from "./components/wrapper";

const Sidebar = () => {
  return (
    <Sidebar.Wrapper>
      <Header />
      <Navigation />
    </Sidebar.Wrapper>
  );
};

Sidebar.Wrapper = Wrapper;

export default Sidebar;
