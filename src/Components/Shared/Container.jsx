import React from "react";

const Container = ({ children, className }) => {
  return (
    <div
      className={`${className} max-w-[1400px] mx-auto px-4 sm:px-5 lg:px-10`}
    >
      {children}
    </div>
  );
};

export default Container;
