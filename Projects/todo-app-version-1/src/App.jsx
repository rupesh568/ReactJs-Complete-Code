// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import Appname from "./Components/Appname";
import AddToDo from "./Components/AddToDo";
import ToDoItem1 from "./Components/ToDoItem1";
import ToDoItem2 from "./Components/ToDoItem2";



function App() {
    return (
        <center class="todo-container">
            <Appname />
            <AddToDo/>
            <div class="item-align">
                <ToDoItem1/>
                <ToDoItem2></ToDoItem2>

            </div>
            
            {/* <AddToDo />
            <Row2></Row2>
            <Row3 /> */}
            {/* <div class="container text-center">
                <div class="row">
                    <div class="col-6">
                        <input type="text" placeholder="Enter Todo Here" />
                    </div>
                    <div class="col-4">
                        <input type="date" />
                    </div>
                    <div class="col-2">
                        <button type="button" class="btn btn-success">
                            Add
                        </button>
                    </div>
                </div>

                <div class="row">
                    <div class="col-6">Buy Milk</div>
                    <div class="col-4">4/10/2026</div>
                    <div class="col-2">
                        <button type="button" class="btn btn-danger">
                            Delete
                        </button>
                    </div>
                </div>

                <div class="row">
                    <div class="col-6">Go To College</div>
                    <div class="col-4">4/10/2026</div>
                    <div class="col-2">
                        <button type="button" class="btn btn-danger">
                            Delete
                        </button>
                    </div>
                </div>
            </div> */}
        </center>
    );
}

export default App;
