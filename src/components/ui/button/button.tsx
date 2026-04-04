interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}
const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button className="bg-blue-500 text-white px-4 py-2 rounded-md" {...props}>
      {children}
    </button>
  );
};

export default Button;
