import React, {useState} from 'react'

import House from './models/House'
import Desk from './models/Desk'

import ToDos from './childComponents/ToDos';
import ToDoPage from './childComponents/ToDoPage';

function ToDo(props) {

    let models = props.models
    let setModels = props.setModels

    let model = [props.model]
    let setModel = props.setModel

    let setToDoTruthy = props.setToDoTruthy
    let setMove = props.setMove


    function showtoDoPage() {
        setToDoTruthy(true)
        setMove(false)
      }


    return (
        <mesh>
            {models.map((item) => {
                if(item.model == 1) {
                    return <House onClick={showtoDoPage} scale={0.3} position={[item.x, item.y - 0.5, item.z]} />
                } else if( item.model == 2) {
                    return <Desk onClick={showtoDoPage} scale={0.025} position={[item.x, item.y - 0.5, item.z]} />
                }
            })}
        </mesh>
    )

}

export default ToDo