import React, {useState} from "react";

import ToDos from './childComponents/ToDos'
import ToDoPage from "./childComponents/ToDoPage";

import House from './models/House'; 
import Desk from './models/Desk'



function ChooseModel(props) {

    let helpTruthy = props.helpTruthy
    let setHelpTruthy = props.setHelpTruthy

    let move = props.move
    let setMove = props.setMove

    let clickEffect = props.clickEffect
    let setClickEffect = props.setClickEffect


    //Samething from App.js, except for the choose model page
    let h1Style = {}
    let divStyle = {}

    if(helpTruthy === false) {
        h1Style = {display: 'none'}
        divStyle = {display: 'none'}
      } else {
      h1Style = {
        color: 'black',
        zIndex: 90,
        position: 'relative',
        textAlign: 'center',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)', 
        opacity: 1,
        fontSize: '30px',
        display: 'block',
        marginTop: '40px'
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
    

    //same thing as collapse to do page, but for the choose model page
    function collapseHelpPage() {
        setHelpTruthy(false)
        setMove(true)
        setClickEffect(false)
      }

    return(
        <div className="Choose model" style={divStyle}>

        <div style={{position: 'absolute', top: '0px',
        top: '1%',
        left: '50%',
        transform: 'translate(-50%, -0%)', 
        }}>

        <h1>INSTRUCTIONS:</h1>
        <h3 >Click on the center of the screen, and press control to activate camera controls. Anytime you want to activate the camera controls again, you will need to do these steps again.</h3>
        <h3>Click on the black orb in order to make your to do list.</h3>
        <h3>Press shift, then click on a model to rotate the model instead of activating the to do page. Press the back tick button or the ~ button in order to turn this feature off.</h3>
        <h3>Back button always removes pages that have popped up, like this one.</h3>

        </div>
        <button style={{position: 'relative', color: 'black', fontSize: '30px', marginBottom: '30px'}} onClick={collapseHelpPage}>Back</button>
    </div>

    )
}

export default ChooseModel