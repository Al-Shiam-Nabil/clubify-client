import React from 'react';

const Heading2 = ({children,className}) => {
    return (
      <h2 className={`${className} text-center font-bold text-2xl font-primary mt-20 mb-4`}>{children}</h2>
    );
};

export default Heading2;