"use client";
import { Menu, X } from "lucide-react";
// import { OpenDrawer } from "./openDrawer";
import { useDispatch } from "react-redux";
import { setDrawer } from "@/redux/features/drawer/drawerSlice";
import { useAppSelector } from "@/redux/hook";

const LayoutMobileHeader = () => {
  const dispatch = useDispatch();

  const { isOpen } = useAppSelector((state) => state.drawer);
  return (
    <div className="primaryBox flex justify-start items-center py-4 px-4 md:hidden">
      <div className="relative w-10 h-10">
        {/* Menu icon */}
        <Menu
          className={`absolute inset-0 m-auto w-6 h-6 transition-all duration-300 ease-in-out ${
            isOpen
              ? "opacity-0 scale-90 pointer-events-none"
              : "opacity-100 scale-100"
          }`}
          onClick={() => dispatch(setDrawer(true))}
        />

        {/* X icon */}
        <X
          className={`absolute inset-0 m-auto w-6 h-6 transition-all duration-300 ease-in-out ${
            isOpen
              ? "opacity-100 scale-100"
              : "opacity-0 scale-90 pointer-events-none"
          }`}
          onClick={() => dispatch(setDrawer(false))}
        />
      </div>
    </div>
  );
};

export default LayoutMobileHeader;
