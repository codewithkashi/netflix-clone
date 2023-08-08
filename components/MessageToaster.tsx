import React from "react";
import { Toaster } from "react-hot-toast";
const MessageToaster = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <Toaster />
    </>
  );
};

export default MessageToaster;
