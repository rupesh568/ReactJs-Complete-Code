
import css from "./App.module.css";
import InputBox from "./Components/InputBox";
import Buttons from "./Components/Buttons";
import { useState } from "react";

function App() {
    let btnArr=["C","1","2","+","3","4","-","5","6","*","7","8","/","=","9","0","."];
    let[calVal,setCalVal]=useState("");
    const onButtonClick =(singlebutton)=>{
        // console.log("btn is clicked");
        // console.log(e);
        // console.log(e.target["innerText"]);
        
        // let kgVal=e.target["innerText"]
        let kgVal=singlebutton;
        if(kgVal==="C"){
            setCalVal("");
            
        }else if(kgVal==="="){
            // let result=eval(calVal);
            // setCalVal(result.toString());
            try {
               let result = eval(calVal);
                setCalVal(result.toString()); // ⭐ KEY FIX
            } catch {
                setCalVal("Error");
        }
            
          
        }else{
            setCalVal(calVal.concat(kgVal));
            
        }
        // console.log(kgVal);
        // setCalVal(calVal.concat(kgVal));
        
    }
    // const newVal=()=>{
    //     newVal2=(...calVal,onButtonClick);
    //     setCalVal(newVal2);
    // }

    return (
        <div className={css.calculator}>
            <InputBox calVal={calVal}></InputBox>
            {/* <input type="text" className={css.inputContainer}/> */}
            <Buttons btnArr2={btnArr} onButtonClick={onButtonClick} ></Buttons>
            {/* <div className={css.buttonContainer}>
                <button className={css.button}>C</button>
                <button className={css.button}>1</button>
                <button className={css.button}>2</button>
                <button className={css.button}>3</button>
            </div> */}
        </div>
    );
}
export default App;
