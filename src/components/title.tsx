const Title = ({ title }: { title: string }) => {
  return <div className="text-2xl font-bold absolute top-0 left-1/2 -translate-x-1/2">{title}</div>;
};

export default Title;
