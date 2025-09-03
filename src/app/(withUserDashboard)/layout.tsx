interface IProps {
  children: React.ReactNode;
}

const UserLayout = ({ children }: IProps) => {
  return <div>{children}</div>;
};

export default UserLayout;
