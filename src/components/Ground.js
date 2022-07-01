import React from 'react';
import { usePlane} from '@react-three/cannon';
import { TextureLoader, RepeatWrapping } from 'three';
import Grass from '../images/Grass texture.jpg'
import { useStore } from '../hooks/useStore';

export const Ground = (props) => {
    const [ref] = usePlane(() => ({rotation: [-Math.PI / 2, 0, 0], ...props}))
    const texture = new TextureLoader().load(Grass)
    texture.wrapS = RepeatWrapping
    texture.wrapT = RepeatWrapping
    texture.repeat.set(100, 100)

    const [addCube, activeTexture] = useStore((state) => [
        state.addCube,
        state.texture,
    ])

    return (
        <mesh ref={ref} receiveShadow
        /*onClick={(e) => {
            e.stopPropagation()
            const [t,x,y,z] = Object.values(e.point).map((coord) =>
            Math.ceil(coord),
            )
            //console.log(x)
            addCube(x, y, z, activeTexture)
        }}*/>
            <planeBufferGeometry attach='geometry' args={[100, 100]} />
            <meshStandardMaterial map={texture} attach="material" />
        </mesh>
    )
}

//export default Ground