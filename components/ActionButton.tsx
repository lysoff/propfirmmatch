"use client";

import { MouseEventHandler, ReactNode } from "react";

interface ActionButtonProps {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
  type?: "green" | "red";
}

const ActionButton = ({
  children,
  onClick,
  type = "green",
}: ActionButtonProps) => {
  return (
    <button
      className={`px-3 py-1 border rounded-md text-sm ${
        type === "green"
          ? "border-green-500 text-green-500"
          : " border-red-500 text-red-500"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ActionButton;
