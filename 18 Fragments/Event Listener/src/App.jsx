import FoodList from "./Components/FoodList";
import ErrorMessage from "./Components/ErrorMessage";
import Container from "./Components/Container";
import FoodInput from "./Components/FoodInput";
import { useState } from "react";

// import React from "react";
function App() {
    // let foodItem=["Rice","Vegetables","Milk","Ghee","Apple","Dal"];
    // let textToShow="Food Item Entered by user";
    // let[textToShow,setTextState]=useState("Food Item entered by user");
    let [foodItem,setNewFood]=useState([]
        // ["Rice","Vegetables","Milk","Ghee","Apple","Dal"]
    );

    const handleronKeyDown = (e) => {
        if(e.key==="Enter"){
            let newFood=e.target.value;
            e.target.value="";
            setNewFood([...foodItem,newFood]);
            // setTextState(e.target.value);
        }
        // console.log(e);
        // setTextState(e.target.value);
    };
    // let foodItem=[];
    // {if(foodItem.length===0){
    //     return <h3>I am still hungry</h3>   //this is of if else rendering;
    // }}
    // let result=foodItem.length===0?<h3>I am still hungry</h3>:null; //terniary operator;
    return (
        <>  
            <Container>
            <h1 className="item-heading">Healthy Food</h1>
            <FoodInput handleronKeyDown={handleronKeyDown}></FoodInput>
            {/* <p>{textToShow}</p> */}
            <ErrorMessage Item6={foodItem}></ErrorMessage>
            
            <FoodList Item6={foodItem}></FoodList>
            </Container>
            
        </>
    );
}

export default App;
