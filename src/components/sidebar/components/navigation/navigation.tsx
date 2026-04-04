import useNavigation from "./hooks/use-navigation";
import NavigationItem from "./navigation-item";

const Navigation = () => {
  const navigationItems = useNavigation();
  return (
    <>
      {navigationItems.map((item) => (
        <NavigationItem key={item.to as string} item={item} />
      ))}
    </>
  );
};

export default Navigation;
