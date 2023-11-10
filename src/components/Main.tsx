import React from 'react';

interface MainProps {
  children: React.ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <div className="w-full  bg-gray-100 text-gray-900 p-8 overflow-y-auto">
      {children}
    </div>
  );
};

export default Main;
