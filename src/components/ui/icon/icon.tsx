import { cn } from "../../../utils/cn";
import {icons, type IconName} from "./icon.data";

type IconProps = {
  name: IconName;
  className?: string;
  onClick?: () => void;
};

export const Icon = ({name, className, onClick}: IconProps) => {
  return (
    <svg className={cn("size-6 min-w-6", className)} onClick={onClick}>
      <use href={icons[name]} />
    </svg>
  );
};
