import React from 'react';
import { usePlane, use} from '@react-three/cannon';
import { TextureLoader, RepeatWrapping } from 'three';
import Grass from '../images/Grass texture.jpg'
import { useStore } from '../hooks/useStore';
import House from './models/House';

export const Ground = (props) => {

    let models = props.models
    let setModels = props.setModels

    let userChoice = props.userChoice
    let setUserChoice = props.setUserChoice

    const [ref] = usePlane(() => ({rotation: [-Math.PI / 2, 0, 0], position: [0, 0.5, 0] }))
    const texture = new TextureLoader().load(Grass)
    texture.wrapS = RepeatWrapping
    texture.wrapT = RepeatWrapping
    texture.repeat.set(100, 100)

    const [addCube, addModel, activeTexture] = useStore((state) => [
        state.addCube,
        state.texture,
    ])

    const addList = (x, y, z, val) => {
        setModels([...models, {model: val, x: x, y: y, z: z, list: [], index: models.length}])
        console.log(models[models.length - 1])
        setUserChoice(0)
    }

    return (
        <mesh ref={ref} receiveShadow
        onClick={(e) => {
            //e.stopPropagation()
            const [t,x,y,z] = Object.values(e.point).map((coord) =>
            Math.ceil(coord),
            )
            //addCube(x, y, z, activeTexture)
            if(userChoice != 0) {
                addList(x, y, z, userChoice)
                //console.log(models)
            }
        }}
        
        >
            <planeBufferGeometry attach='geometry' args={[400, 400]} />
            <meshStandardMaterial /*map={texture}*/ attach="material" color="blue" opacity={0.1} transparent />
        </mesh>
    )
}

