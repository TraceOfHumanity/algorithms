import useNavigation from "./hooks/use-navigation";
import NavigationItem from "./navigation-item";

const Navigation = () => {
  const navigationItems = useNavigation();
  return (
    <nav className="flex flex-col gap-1">
      {navigationItems.map((item) => (
        <NavigationItem key={item.to as string} item={item} />
      ))}
    </nav>
  );
};

export default Navigation;
