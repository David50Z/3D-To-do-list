import React, {useState} from 'react';
import { useBox } from '@react-three/cannon';
import * as textures from '../textures';
import axios from 'axios';
import {useStore} from '../hooks/useStore'

const Cube = ({position, scale, texture, ...props}) => {

    //Legend said this code was being used once... Not anymore

    const [hover, setHover] = useState(null)
    const [addCube, addModel, removeCube, activeTexture] = useStore((state) => [
        state.addCube,
        state.removeCube,
        state.texture,
    ]) 
    const [ref, api] = useBox(() => ({
        type: 'Static',
        mass: 1,
        position,
        scale,
        ...props
    }))

    return <mesh 
        castShadow 
        ref={ref} 
        onPointerMove={(e) => {
            e.stopPropagation()
            setHover(Math.floor(e.faceIndex / 2))
        }}
        onPointerOut={() => {
            setHover(null)
        }}
        
        onClick={(e) => {
            e.stopPropagation()
            const clickedFace = Math.floor(e.faceIndex / 2)
            const {x, y, z} = ref.current.position
            //console.log(z)
            if(clickedFace == 0){
                e.altKey ? removeCube(x,y,z) : addCube(x + 1, y, z, activeTexture)
                return
            }
            if(clickedFace == 1){
                e.altKey ? removeCube(x,y,z) : addCube(x - 1, y, z, activeTexture)
                return
            }
            if(clickedFace == 2){
                e.altKey ? removeCube(x,y,z) : addCube(x, y + 1, z, activeTexture)
                return
            }
            if(clickedFace == 3){
                e.altKey ? removeCube(x,y,z) : addCube(x, y - 1, z, activeTexture)
                return
            }
            if(clickedFace == 4){
                e.altKey ? removeCube(x,y,z) : addCube(x, y, z + 1, activeTexture)
                return
            }
            if(clickedFace == 5){
                e.altKey ? removeCube(x,y,z) : addCube(x, y, z - 1, activeTexture)
                return
            }
        }}
    >
    {[...Array(6)].map((_,index) => (
        <meshStandardMaterial
            attachArray="material"
            map={textures[texture]}
            key={index}
            color={hover != null ? "grey" : "white"}
            
            />
    ))}
            <boxBufferGeometry attach="geometry"  />
        </mesh>
}

export default Cube

//map={textures[type]}