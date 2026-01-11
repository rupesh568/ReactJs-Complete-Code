// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import Appname from './Components/Appname';
import AddToDo from './Components/AddToDo';
import ToDoItems from './Components/ToDoItems';
import ErrorMessage from './Components/ErrorMessage';
import { useState } from 'react';


function App() {
    

    let[todoItem4,setTodoItem4]=useState(
        [ 
        //     {
        //         todoname:"Buy Milk",
        //         tododata:"10/12/2026",
        //    },
        //    {
        //         todoname:"Go To College",
        //         tododata:"10/12/2026",
        //    },
        //    {
        //         todoname:"Cook BreakFast",
        //         tododata:"9:24AM",
        //    },

        ]
    );
    // let Message=todoItem4.length==0?"Enter Food Item":null;
    

    let[initialName,setName]=useState("");
    const handlerOnChange=(value)=>{
        setName(value);
    }

    let[initialDate,setDate]=useState("");
    const handlerOnSelect=(value2)=>{
        setDate(value2);
    }
    let todoItem5={
        todoname:initialName,
        tododata:initialDate,
    };
    const handleOnClick=()=>{
        if(!initialName || !initialDate) return;
        
        let newToDo=([...todoItem4,todoItem5])
        setTodoItem4(newToDo);
        setName("");
        setDate("");
    }
    
    const handlerOnDelete=(Todoname,Tododate)=>{
        // console.log(`${Todoname} and ${Tododate} button is clicked`);
        const updatedToDo=todoItem4.filter((item)=>{
           return !(item.todoname===Todoname && item.tododata===Tododate)
        });
        setTodoItem4(updatedToDo);
    
    }
    return (
        <center className="todo-container">
            <Appname />
            <AddToDo initialName={initialName} initialDate={initialDate} handlerOnChange={handlerOnChange} handlerOnSelect={handlerOnSelect} handleOnClick={handleOnClick}></AddToDo>
            <ErrorMessage item={todoItem4}></ErrorMessage>
            <ToDoItems todoItems={todoItem4} handlerOnDelete={handlerOnDelete} ></ToDoItems>
            
        
    
        </center>
    );
}

export default App;
