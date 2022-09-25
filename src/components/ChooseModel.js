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

    let clickEffect = props.clickEffect
    let setClickEffect = props.setClickEffect

    let setClickMe = props.setClickMe


    //Samething from App.js, except for the choose model page
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
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)', 
        opacity: 1,
        //fontSize: '30px',
        //display: 'block',
        //marginTop: '40px'
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
    function collapseChoosePage() {
        setChooseTruthy(false)
        setMove(true)
        setClickEffect(false)
        setClickMe(true)
      }

    return(
        <div onClick={(e) => console.log(e)} className="Choose model" style={divStyle}>

        <div style={{position: 'absolute', top: '0px',
        top: '1%',
        left: '50%',
        transform: 'translate(-50%, -0%)', 
        }}>

        <h1 >Make toDo list</h1>
        <h2 style={{marginTop: '50px'}}>INSTRUCTIONS:</h2>
        <h3 style={{maginTop: '50px'}}>First, click on the button with the type of to do list you want to make, click back, click the center of the screen and press the control button again, then click anywhere on the ground to make a 3D representation of the type of to do list, then, click on it!</h3>
            
        <button style={{...h1Style, fontSize: '30px', display: 'block', marginTop: '60px'}} onClick={(e) => { 
          /*Next time the user clicks the ground, a 3D house will appear */
           setUserChoice(1)
           console.log(e)
           }} >Home toDo list</button>

        <button style={{...h1Style, fontSize: '30px', display: 'block', marginTop: '50px'}} onClick={() => { /*Next time the user clicks the ground, a 3D desk will appear */ setUserChoice(2)}} >Work to do list</button>
            
        </div>
        <button style={{position: 'relative', color: 'black', fontSize: '30px', marginBottom: '30px'}} onClick={collapseChoosePage}>Back</button>
    </div>

    )
}

export default ChooseModel