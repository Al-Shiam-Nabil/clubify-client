import React from 'react';

const Heading2 = ({children,className}) => {
    return (
      <h2 className={`${className} text-2xl font-primary`}>{children}</h2>
    );
};

export default Heading2;