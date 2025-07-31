import React from 'react';

const SplineBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <iframe 
        src='https://my.spline.design/particleplanet-5e0fIrNj2I6HQxOgBFekzc02/' 
        frameBorder='0' 
        width='100%' 
        height='100%'
        className="w-full h-full"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1
        }}
      />
    </div>
  );
};

export default SplineBackground; 