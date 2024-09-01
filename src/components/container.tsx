import React from "react";

export default function Container({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="max-w-[1100px] mx-auto bg-white min-h-screen flex flex-col shadow-md">
      {children}
    </div>
  );
}
