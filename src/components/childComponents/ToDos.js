import React, {useState} from "react";

function ToDo(props) {
    let item = props.item
    let index = props.index
    let toDos = props.toDos
    let setToDos = props.setToDos
    let h1Style = props.h1Style

    //let number = props.number
    //let setNumber = props.setNumber

    let chosenList = props.chosenList
    let setChosenList = props.setChosenList

    let setAddInput = props.setInput

    let number = props.number
    let setNumber = props.setNumber

    const [input, setInput] = useState('')
    //const [number, setNumber] = useState(false)


    //Similar logic to the handleSubmit function
    const handleDelete = () => {
        let list = chosenList
        list[0].list.splice(index, 1)
        setChosenList(list)
        //rerenders App.js
        setNumber(!number)
    }
    //Similar logic to handleSubmit function
    const handleEdit = (key) => {
        //Ok I literally forgot that this shouldn't be possible while making this.
        //Still works????
        if(key.keyCode == 13) {
        let list = chosenList
        list[0].list[index] = input
        setChosenList(list)
        setNumber(!number)
        
        }
    }

    //Stores the edit inputs val
    const handleInput = (event) => {
        setInput(event.target.value)
    }

    //const 

    return (
        <div style={{marginTop: '50px', postion: 'relative', textAlign: 'center'}}>
            <h2 style={{...h1Style, display: 'inLine'}}>{item}</h2>
            <input type='text' placeholder="Edit to do"  style={{...h1Style, marginLeft: '20px'}} onChange={handleInput} onKeyDown={(key) => handleEdit(key)} ></input>
            <button style={{...h1Style, display: 'inline', marginLeft: '20px', fontSize: '20px'}} onClick={handleDelete}>Delete</button>
        </div>
    )

}

export default ToDo