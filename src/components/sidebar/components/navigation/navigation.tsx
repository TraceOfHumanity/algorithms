import useNavigation from "./hooks/use-navigation";
import NavigationItem from "./navigation-item";

const Navigation = () => {
  const { dataStructures, algorithms } = useNavigation();
  const sections = [dataStructures, algorithms];
  return (
    <nav className="flex flex-col gap-4">
      {sections.map((section) => (
        <div key={section.title} className="flex flex-col gap-2">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
            {section.title}
          </h2>
          <div className="flex flex-col gap-1">
            {section.items.map((item) => (
              <NavigationItem key={item.to as string} item={item} />
            ))}
          </div>
        </div>
      ))}
    </nav>
  );
};

export default Navigation;
