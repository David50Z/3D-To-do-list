import { useRef, useEffect } from 'react';
export const useInterval = (callback, delay) => {
  const savedCallback = useRef();
  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  });
  

  //setInterval function but react style
  useEffect(() => {
    function tick() {
      if (typeof savedCallback?.current !== 'undefined') {
        savedCallback.current();
      }
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};