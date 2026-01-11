import CalculatorButton from './CalculatorButton';
import css from "./Buttons.module.css";
const Buttons=({btnArr2})=>{
    return <div className={css.buttonContainer}>
        {btnArr2.map((val)=>(
          <CalculatorButton singlebutton={val}></CalculatorButton>
        ))}
    </div>

}
export default Buttons;