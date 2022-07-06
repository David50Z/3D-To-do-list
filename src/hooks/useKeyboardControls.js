import { useState, useEffect } from 'react';
import { useStore } from './useStore';

function actionByKey(key) {

  //I wrote this all down copying a guide, and the dumbass that made it explained literally nothing
  //Normally I piece together, but I can barely theorize what the code is doing. So no sudo code here!

  
  const keys = {
    KeyW: 'moveForward',
    KeyS: 'moveBackward',
    KeyA: 'moveLeft',
    KeyD: 'moveRight',
    Space: 'jump',
  };
  return keys[key];
}


function textureByKey(key) {
  const keys = {
    Digit1: 'dirt',
    Digit2: 'grass',
    Digit3: 'glass',
    Digit4: 'wood',
    Digit5: 'log',
  };
  return keys[key];
}
const useKeyboardControls = (props) => {
  const [movement, setMovement] = useState({
    moveForward: false,
    moveBackward: false,
    moveLeft: false,
    moveRight: false,
    jump: false,
  });
  const [setTexture] = useStore((state) => [state.setTexture]);



  useEffect(() => {
    const handleKeyDown = (e) => {
      //console.log(e.code)

      if (actionByKey(e.code)) {
        setMovement((state) => ({
          ...state,
          [actionByKey(e.code)]: true,
        }));
      }

      if (textureByKey(e.code)) {
        setTexture(textureByKey(e.code));
      }
    };
    const handleKeyUp = (e) => {
      if (actionByKey(e.code)) {
        setMovement((state) => ({
          ...state,
          [actionByKey(e.code)]: false,
        }));
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);
    

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [setTexture]);

  return movement;
};

export default useKeyboardControls