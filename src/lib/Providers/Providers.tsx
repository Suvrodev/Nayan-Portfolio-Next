"use client";
import { store } from "@/redux/store";
import { Provider } from "react-redux";

interface IProps {
  children: React.ReactNode;
}

const Providers = ({ children }: IProps) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;
