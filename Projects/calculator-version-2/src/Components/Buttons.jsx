import CalculatorButton from './CalculatorButton';
import css from "./Buttons.module.css";
const Buttons=({btnArr2,onButtonClick})=>{
    return <div className={css.buttonContainer}>
        {btnArr2.map((val)=>(
          <CalculatorButton 
          singlebutton={val}
          onButtonClick={onButtonClick}
          
          ></CalculatorButton>
        ))}
    </div>

}
export default Buttons;