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

    //This gives the plane geometry properties that react-three-cannon can use to make it a physical surface
    //that users can use to walk around
    const [ref] = usePlane(() => ({ /*rotates the plane 160 degrees */ rotation: [-Math.PI / 2, 0, 0], position: [0, 0.5, 0] }))

    //Makes a texture for the ground, but we aren't using that
    const texture = new TextureLoader().load(Grass)

    //Don't know!
    texture.wrapS = RepeatWrapping
    texture.wrapT = RepeatWrapping

    //Used to say how much of the plane will have this texture
    texture.repeat.set(100, 100)

    //imports the hooks from useStore
    const [addCube, addModel, activeTexture] = useStore((state) => [
        state.addCube,
        state.texture,
    ])

    //Adds a new model to the list of models
    const addList = (x, y, z, val) => {
        setModels([...models, {model: val, x: x, y: y, z: z, rotation: [0, 0, 0,], list: [], index: models.length}])
        console.log(models[models.length - 1])
        setUserChoice(0) //Sets user choice to 0 so the user doesn't keep placing new 3D models
    }

    return (
        <mesh ref={ref} receiveShadow
        onClick={(e) => {
            //console.log(e)
            //gets the position of where the user clicked on the ground, and loops
            //through the array that contains those values, assigning them to the
            //x,y,z variables.
            const [t,x,y,z] = Object.values(e.point).map((coord) =>
            Math.ceil(coord),
            )
            //addCube(x, y, z, activeTexture)
            if(userChoice != 0) {
                //Makes a new model, and gives it the data of where it should be placed,
                //and what kind of model it should be using userChoice
                addList(x, y, z, userChoice)
            }
        }}
        
        >
            <planeBufferGeometry /*Shape of one of the objects our virtual enviorment will have */ attach='geometry' args={[400, 400]} />
            
            <meshStandardMaterial /*map={texture}*/ attach="material" /*What our shape will look like */ color="blue" opacity={0.1} transparent />
        </mesh>
    )
}

