import React from 'react';
import { MoonLoader } from 'react-spinners';

const LoadingComponent = () => {
    return (
      <div className="grid justify-center mt-40 h-screen">
        <MoonLoader size={30} speedMultiplier={.75} color="#22C55E" />
      </div>
    );
};

export default LoadingComponent;