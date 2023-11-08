import React from 'react';

interface ScrollableContentProps {
  children: React.ReactNode;
}

const ScrollableContent: React.FC<ScrollableContentProps> = ({ children }) => {
  return (
    <div className="w-full lg:w-2/3 bg-gray-800 p-8 overflow-y-auto">
      {children}
    </div>
  );
};

export default ScrollableContent;
