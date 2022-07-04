import React, {useState} from "react";

import ToDos from './childComponents/ToDos'
import ToDoPage from "./childComponents/ToDoPage";

import House from './models/House'; 
import Desk from './models/Desk'



function ChooseModel(props) {

    let chooseTruthy = props.chooseTruthy
    let setChooseTruthy = props.setChooseTruthy

    let userChoice = props.userChoice
    let setUserChoice = props.setUserChoice

    let move = props.move
    let setMove = props.setMove

    const [toDoTruthy, setToDoTruthy] = useState(false)
    const [models, setModels] = useState([])

    let h1Style = {}
    let divStyle = {}

    if(chooseTruthy === false) {
        h1Style = {display: 'none'}
        divStyle = {display: 'none'}
      } else {
      h1Style = {
        color: 'black',
        zIndex: 90,
        position: 'relative',
        textAlign: 'center',
        opacity: 1,
      }
    
      divStyle = {
    
        zIndex: 90,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%', 
        paddingLeft: '25%',
        paddingRight: '25%',
        paddingTop: '87vh',
        backgroundColor: 'white',
        opacity: 1
        
      }
    }
    
    function collapseChoosePage() {
        setChooseTruthy(false)
        setMove(true)
      }

    return(
        <div className="Choose model" style={divStyle}>

        <div style={{position: 'absolute', top: '0px',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -0%)', 
        }}>

        <h1>Make toDo list</h1>
            
        <h2 style={h1Style} onClick={() => {setUserChoice(1)}} >Home toDo list</h2>

        <h2 style={h1Style} onClick={() => {setUserChoice(2)}} >Work to do list</h2>
            
        </div>
        <h1 style={{position: 'relative', color: 'black'}} onClick={collapseChoosePage}>Back</h1>
    </div>

    )
}

export default ChooseModel