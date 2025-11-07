import React from 'react';

const GrowthCardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='bg-white rounded-sm p-7 md:p-10 relative z-20'>{children}</div>
  );
};

export default GrowthCardWrapper;
