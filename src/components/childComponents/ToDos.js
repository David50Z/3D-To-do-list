import React, {useState} from "react";

function ToDo(props) {
    let item = props.item
    let index = props.index
    let toDos = props.toDos
    let setToDos = props.setToDos
    let h1Style = props.h1Style

    let number = props.number
    let setNumber = props.setNumber

    let chosenList = props.chosenList
    let setChosenList = props.setChosenList

    const [input, setInput] = useState('')



    const handleDelete = () => {
        let list = chosenList
        list[0].list.splice(index, 1)
        setChosenList(list)
        setNumber(number + 1)
    }

    const handleEdit = (key) => {
        if(key.keyCode == 13) {
        let list = chosenList
        list[0].list[index] = input
        setChosenList(list)
        setNumber(number + 1)
        }
    }

    const handleInput = (event) => {
        setInput(event.target.value)
    }

    //const 

    return (
        <div>
            <h2 style={{...h1Style, display: 'inLine'}}>{item}</h2>
            <input type='text' placeholder="Edit to do"  style={{...h1Style, marginLeft: '20px'}} onChange={handleInput} onKeyDown={(key) => handleEdit(key)} ></input>
            <button style={{...h1Style, display: 'inline', marginLeft: '20px', fontSize: '20px'}} onClick={handleDelete}>Delete</button>
        </div>
    )

}

export default ToDo