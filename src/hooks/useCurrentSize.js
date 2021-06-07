import {useState, useEffect} from 'react';

const getWidth = () => {

  return document.documentElement.clientWidth;
};

function useCurrentSize() {

  const [size, setSize] = useState({width: getWidth()});

  useEffect(() => {

    let timeOutId = null;

    const handleResizeEvent = () => {
      clearTimeout(timeOutId);

      timeOutId = setTimeout(() => {
        setSize({
          width: getWidth(),
        });
      }, 150);
    };

    window.addEventListener('resize', handleResizeEvent);

    return () => window.removeEventListener('resize', handleResizeEvent);
  }, [])

  return size;
}

export default useCurrentSize;
