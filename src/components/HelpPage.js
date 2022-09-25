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

        

        <h3 className="instructions-title">WARNING!!!</h3>
        <h4 className="instructions">This site has only been tested on Chrome, and might be buggy on other browsers</h4>
        <h4 className="instructions" style={{marginBottom: '30px'}}>Also this application does not work completely as intended on mobile</h4>
        

        <h3 className="instructions" style={{marginBottom: '30px'}}>Hello user! This is a 3D to do list. You can create 3D models, and each model will contain a todo list. Have fun!</h3>
        

        <h3 className="instructions-title" style={{marginBottom: '30px'}}>INSTRUCTIONS:</h3>
        <h4 className="instructions">Click on the red circle at the center of your screen. This will give you camera controls, and allow you to look around your 3D enviorment.</h4>
        <h4 className="instructions">Click on the black orb and choose a 3D model that will contain your 3D to do list. Click on the ground to place the 3D model, and click on it to access your to do list.</h4>
        <h4 className="instructions">Press shift and click on a model to rotate it. Press shift again to turn this ability off.</h4>
        <h4 className="instructions">Back button always removes pages that have popped up, like this one.</h4>
        <h4 className="instructions">Models and lists get saved every 5 seconds</h4>

        </div>
        <button style={{position: 'relative', color: 'black', fontSize: '30px', marginBottom: '30px'}} onClick={collapseHelpPage}>Back</button>
    </div>

    )
}

export default ChooseModel