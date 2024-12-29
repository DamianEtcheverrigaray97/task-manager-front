import React from 'react';

const Header: React.FC = () => {
  return (
    <header
      className="bg-[rgba(40,2,237,0.34)] text-white shadow-md sticky top-0 z-60"
      style={{ height: '65px' }}
    >
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
        <h1 className="text-xl font-bold">Task Manager</h1>
      </div>
    </header>
  );
};

export default Header;