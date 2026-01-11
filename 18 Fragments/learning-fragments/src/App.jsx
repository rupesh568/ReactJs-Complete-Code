import FoodList from "./Components/FoodList";
import ErrorMessage from "./Components/ErrorMessage";
import Container from "./Components/Container";

// import React from "react";
function App() {
    let foodItem=["Rice","Vegetables","Milk","Ghee","Apple","Dal"];
    // let foodItem=[];
    // {if(foodItem.length===0){
    //     return <h3>I am still hungry</h3>   //this is of if else rendering;
    // }}
    // let result=foodItem.length===0?<h3>I am still hungry</h3>:null; //terniary operator;
    return (
        <>  
            <Container>
            <h1 className="item-heading">Healthy Food</h1>
            <ErrorMessage Item6={foodItem}></ErrorMessage>
            
            <FoodList Item6={foodItem}></FoodList>
            </Container>
            <Container>
            <p>Above is the list of healthy foods to eat to remain healthy and wellbeing</p>
            </Container>
        </>
    );
}

export default App;
