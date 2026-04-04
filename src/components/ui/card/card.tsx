interface CardProps {
  children: React.ReactNode;
}
const Card = ({ children }: CardProps) => {
  return <div className="bg-white rounded-lg shadow-md p-4">{children}</div>;
};

export default Card;
