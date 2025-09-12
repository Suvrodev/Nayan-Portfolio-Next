"use client";
import {
  setCloseModal,
  setOpenModal,
} from "@/redux/features/customModal/customModalSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import React, { useEffect } from "react";

const CustomModal = () => {
  const { isOpenModal } = useAppSelector((state) => state.customModalStore);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isOpenModal) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") dispatch(setCloseModal());
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpenModal, dispatch]);
  return (
    <div>
      <button
        className="bg-blue-500 py-2 px-4 text-white rounded-md"
        onClick={() => dispatch(setOpenModal())}
      >
        Open Modal
      </button>
      {isOpenModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={() => dispatch(setCloseModal())} // click outside closes
        >
          <div
            className="relative w-full max-w-lg rounded-2xl bg-white text-black p-6 shadow-xl dark:bg-neutral-900"
            onClick={(e) => e.stopPropagation()} // don't close when clicking inside
          >
            {/* Close (X) */}
            <button
              type="button"
              onClick={() => dispatch(setCloseModal())}
              className="absolute right-3 top-3 rounded-md p-2 text-neutral-500 hover:bg-neutral-100 hover:text-neutral-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:hover:bg-neutral-800"
            >
              ✕
            </button>

            {/* Header */}
            <h2 className="mb-4 text-xl font-semibold">This is Title</h2>
            <p>This is Custom modal</p>
            <div className="h-[250px] flex justify-center items-end  ">
              <button
                className="bg-blue-500 py-4 px-4 rounded-md text-white"
                onClick={() => dispatch(setCloseModal())}
              >
                Close Modal
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomModal;
