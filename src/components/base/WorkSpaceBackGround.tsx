import { ReactNode } from "react";

export default function WorkSpaceBackGround({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <div
        id="root"
        className="flex items-center justify-center min-h-screen bg-white bg-opacity-40 flex-col"
      >
        {children}
      </div>
    </>
  );
}
