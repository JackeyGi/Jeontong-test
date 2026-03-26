import React from 'react';

const BackgroundBlobs: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-brand-light">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-green/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-gold/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-sky-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]"></div>
    </div>
  );
};

export default BackgroundBlobs;