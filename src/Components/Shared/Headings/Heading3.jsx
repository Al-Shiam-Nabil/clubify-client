import React from 'react';

const Heading3 = ({children,className}) => {
    return (
      <h3 className={`${className} text-xl font-primary`}>{children}</h3>
    );
};

export default Heading3;