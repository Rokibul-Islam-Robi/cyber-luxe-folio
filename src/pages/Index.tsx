import { useState, useEffect } from 'react';
import Preloader from '../components/Preloader';
import Portfolio from './Portfolio';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Preloader onComplete={handlePreloaderComplete} />}
      <Portfolio />
    </>
  );
};

export default Index;
