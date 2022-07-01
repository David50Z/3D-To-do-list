import React, {useEffect, useRef} from 'react';
import { extend, useThree } from "@react-three/fiber"
import { PointerLockControls as PointerLockControlsImpl } from "three/examples/jsm/controls/PointerLockControls"

extend({PointerLockControlsImpl})

const FPVControls = (props) => {
    const {camera, gl} = useThree()
    const controls = useRef()

useEffect(() => {
    function screenLock(key) {
        if(key.keyCode == 17) {
            controls.current.lock()
        }
    }

    document.addEventListener("keydown", screenLock, false)

    /*document.addEventListener("click", () => {
        controls.current.lock()
    })*/
}, [])

    return (
        <pointerLockControlsImpl 
            ref={controls}
            args={[camera, gl.domElement]}
        />
    )
}

export default FPVControls