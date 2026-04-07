import { cn } from "../../../utils/cn";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}
const Card = ({ children, className }: CardProps) => {
  return <div className={cn("bg-white rounded-lg shadow-md p-4", className)}>{children}</div>;
};

export default Card;
