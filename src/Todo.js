/*"StAuth10244: I Hetal P1tel, 000821900 certify that this material is my original work. No other person's work has been used without due acknowledgement. I have not made my work available to anyone else."*/
import React from 'react';
import './TODO.css';
import editIcon from './e1.png';
import deleteIcon from './d.png';
import saveIcon from './s.png';



function List({ id, item, newInput, deleteItem, setNewInput, editItem, displayText, icon1, icon2 }) {
    
        return (<tr>
            <td>{id}</td>
            <td className="editTextBox">
                {item}
                <input type="text" value={newInput} style={{ display: displayText }} onChange={e => setNewInput(e.target.value)} autoFocus />
               
            </td>
            <td className="actionColumn">
                <div className="actionButtonContainer">
                    <button className="actionButton" onClick={() => editItem(id)} ><img src={icon1} alt="edit"/></button>
                    <button className="actionButton" onClick={() => deleteItem(id)}><img src={icon2} alt="delete"/></button>
                </div>
            </td>
            <td></td>
       
        </tr>);
 
    }

function TODO() {
    // const [displayText, setDisplayText] = React.useState('none');
    const [todoList, setTodoList] = React.useState([{ id: 1, item: "Do Meditation and yoga", displayText: 'none', icon1: editIcon, icon2: deleteIcon }, { id: 2, item: "Prepare Brunch for friends", displayText: 'none', icon1: editIcon, icon2: deleteIcon }, { id: 3, item: " Visit Bank", displayText: 'none', icon1: editIcon, icon2: deleteIcon}])
    const [input, setInput] = React.useState(" ");
    const [id, setId] = React.useState(4);
    const [newInput, setNewInput] = React.useState(input);
    
    function showTodoList(i) {
       
        return (<List key={i.id}
            id={i.id}
            item={i.item}
            deleteItem={() => deleteItem(i.id)}
            editItem={() => editItem(i.id)}          
            displayText={i.displayText}
            setNewInput={(event) => setNewInput(event)}
            icon1={i.icon1}
            icon2={i.icon2}
            newInput={newInput}
        >
        </List>);
    }
    function SETID() {
        setId(id + 1);
    };
    function addTodoItem() {
        SETID();
        if (input !== null && input !== " " && todoList!==null) {
            const newTodoItem = {
                id: id, item: input, displayText: 'none', icon1: editIcon, icon2: deleteIcon
            };
            // console.log({ newTodoItem });
            let newTodoList = todoList;
            newTodoList.push(newTodoItem);
            setTodoList(newTodoList);
            // console.log({ todoList });
            setInput("");
        }
        else {
            alert("Required todo Activity!!!! please todo Activity first and then click on Add.")
        }
        setInput(" ");
    }
    const editItem = (id) => { 
        let newTodoList = todoList  
        //newTodoList = newTodoList.filter(x => x.id == id)
        //    .map(x => {
        //        const { id, item, displayText } = x;
        //        return { id, item, displayText: 'flex' };
        //    });     
        newTodoList = newTodoList.map(x => {
            if (x.icon1 === editIcon) {
                if (x.id === id) {
                    if (x.displayText === 'none')
                        x = { id: x.id, item: x.item, displayText: 'flex', icon1: saveIcon, icon2: x.icon2 }
                    else
                        x = { id: x.id, item: x.item, displayText: 'none', icon1: x.icon1, icon2: x.icon2 }
                }
                else {
                    x = { id: x.id, item: x.item, displayText: x.displayText, icon1: x.icon1, icon2: x.icon2 }
                }
            }
            else if (x.icon1 === saveIcon) {
                if (x.id === id) {
                    if (newInput !== null && newInput !== "") {
                        x = { id: x.id, item: newInput, displayText: 'none', icon1: editIcon, icon2: x.icon2 }
                    }
                    else {
                        x = { id: x.id, item: x.item, displayText: 'none', icon1: editIcon, icon2: x.icon2 }
                    }
                }
                else {
                    x = { id: x.id, item: x.item, displayText: x.displayText, icon1: x.icon1, icon2: x.icon2 }
                }
            }
            return x;
        });
        //inputStateChange(input = newItem);
        setNewInput("");
        console.log(newTodoList);       
        setTodoList(newTodoList)
    };
    const deleteItem = id => {
        let newTodoList = todoList;
        newTodoList = newTodoList.filter(x => x.id !== id);
        setTodoList(newTodoList);
    };
        return (
            <div className="todoPage">
                <div className="addItemForm">
                    <br />
                    <form>
                    <label> Add Todo item:</label>
                        <input type="text" onChange={e => setInput(e.target.value)} value={input} />
                        <input className="addButton" type="button" value="Add" onClick={addTodoItem} />
                  </form>
                </div>
                <hr/>
                <h1 className="pageTitle">TODO List</h1>
                <br />
                <table className="todoTable">
                    <tbody>
                        <tr><th className="listIdColumn">List No</th><th className="itemColumn">TODO</th><th className="actionColumn">Actions</th></tr>
                        {todoList.map(showTodoList)}
                    </tbody>
                </table>
               
            </div>
            );
}
export { TODO };