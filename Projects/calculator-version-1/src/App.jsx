
import css from "./App.module.css";
import InputBox from "./Components/InputBox";
import Buttons from "./Components/Buttons";
function App() {
    let btnArr=["C","1","2","+","3","4","-","5","6","*","7","8","/","=","9","0","."];
    return (
        <div className={css.calculator}>
            <InputBox></InputBox>
            {/* <input type="text" className={css.inputContainer}/> */}
            <Buttons btnArr2={btnArr}></Buttons>
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
