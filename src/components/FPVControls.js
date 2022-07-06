import React, {useEffect, useRef} from 'react';
import { extend, useThree } from "@react-three/fiber"
import { PointerLockControls as PointerLockControlsImpl } from "three/examples/jsm/controls/PointerLockControls"

//This is a three function that allows the developer to effect the cursor,
//and get cursor data like its position on the screen
extend({PointerLockControlsImpl})

const FPVControls = (props) => {

    let clickEffect = props.clickEffect
    let setClickEffect = props.setClickEffect

    //react-three stuff
    const {camera, gl} = useThree()

    //So this is assigning the PointerLockControlsImpl to controls.
    //How? I don't know, still need to study useRef
    const controls = useRef()

useEffect(() => {
    function screenLock(key) {
        //When user hits ctrl, the user can turn the virtual camera
        if(key.keyCode == 17) {
            controls.current.lock()
            setClickEffect(true)
        }
        
    }

    //Makes the event listener for any keys being pressed
    document.addEventListener("keydown", screenLock, false)

}, [])

    return (
        <pointerLockControlsImpl 
            ref={controls}
            args={[camera, gl.domElement]}
        />
    )
}

export default FPVControls