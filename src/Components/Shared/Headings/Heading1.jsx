import React from 'react';

const Heading1 = ({children,className}) => {
    return (
      <h1 className={`${className} text-3xl xl:text-4xl font-bold `}>{children}</h1>
    );
};

export default Heading1;