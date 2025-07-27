"use client";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import { Toaster } from "sonner";

interface IProps {
  children: React.ReactNode;
}

const Providers = ({ children }: IProps) => {
  return (
    <Provider store={store}>
      {children}
      <Toaster />
    </Provider>
  );
};

export default Providers;
