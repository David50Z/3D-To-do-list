import { keyboard } from "@testing-library/user-event/dist/keyboard";
import React, {useState} from "react";

import ToDos from "./ToDos";

function ToDoPage(props) {

    let h1Style = props.h1Style
    let divStyle = props.divStyle
    let collapsetoDoPage = props.collapsetoDoPage

    let number = props.number
    let setNumber = props.setNumber

    let chosenList = props.chosenList
    let setChosenList = props.setChosenList

    let models = props.models
    let setModels = props.setModels





    let [input, setInput] = useState('')


    const handleInput = (event) => {
        setInput(event.target.value)
    }

    const handleSubmit = (e) => {
        //e.preventDefault()
        if(e.keyCode == 13) {
        let list = chosenList
        list[0].list.push(input)
        console.log(list)
        setChosenList(list)
        setInput('')
        console.log('hello')
        }
        
    }



    

    return(
        <div className="ToDoPage" style={divStyle}>
            <div style={{position: 'absolute', top: '0px',top: '10%',left: '50%', transform: 'translate(-50%, -0%)' }}>
                {chosenList[0].list.map((item, index) => {
                    return (
                        <ToDos 
                        item={item} 
                        index={index} 
                        h1Style={h1Style} 
                        number={number} 
                        setNumber={setNumber} 

                        chosenList={chosenList}
                        setChosenList={setChosenList}
                        />
                        
                    )
                })}

                <input type='text' placeholder='Make to do' onChange={handleInput} onKeyDown={(e) => handleSubmit(e)} style={{marginTop: '30px'}} ></input>
                

                
            </div>
            <h1 style={{position: 'relative', color: 'black'}} onClick={collapsetoDoPage}>Back</h1>

            <h1 style={{position: 'relative', color: 'red', right: '0px'}} onClick={() => {
                let newModels = models
                newModels[chosenList[0].index].model = 0
                collapsetoDoPage()
            }}>Delete ToDo list</h1>
        </div>
    )

}

export default ToDoPage


//<button onClick={handleSubmit} style={{marginTop: '20px'}} value={input}>Add to do</button>



/*                        <div>
                        <h1 style={{...h1Style, display: 'inLine'}}>{item}</h1>
                        <button style={{...h1Style, display: 'inLine', marginLeft: '30px'}}
                        onClick={() => handleDelete(index)}
                        >Delete</button>
                        </div>



/*                <h1 style={{textAlign: 'center', 
                    position: 'static', 
                    color: 'red',
                    top: '-87vh',
                }}>hi</h1>

                <h1 style={h1Style} onClick={addToArray}>Hello</h1>






/*left: 0, 
        right: 0, 
        marginLeft: 'auto', 
        marginRight: 'auto', 
        width: '100px', */