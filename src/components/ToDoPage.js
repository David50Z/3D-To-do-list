import React, {useState} from "react";
import style from '../App.css'

function ToDoPage(props) {

    let h1Style = props.h1Style
    let divStyle = props.divStyle
    let collapsetoDoPage = props.collapsetoDoPage

    let [toDos, setToDos] = useState([])

    function addToArray() {
        setToDos([...toDos, 'Item'])
    }
    console.log(toDos)

    return(
        <div className="ToDoPage" style={divStyle}>
            <div style={{position: 'absolute', top: '0px'}}>
                <h1 style={{textAlign: 'center', 
                    position: 'static', 
                    color: 'red',
                    top: '-87vh',
                }}>hi</h1>
                <h1 style={h1Style} onClick={addToArray}>Hello</h1>
                {toDos.map((item) => {
                    return <h1 style={h1Style}>{item}</h1>
                })}
                <h1 style={{position: 'absolute', bottom: '-100px', color: 'red'}} onClick={collapsetoDoPage}>Back</h1>
            </div>
        </div>
    )

}

export default ToDoPage






/*left: 0, 
        right: 0, 
        marginLeft: 'auto', 
        marginRight: 'auto', 
        width: '100px', */