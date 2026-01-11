import css from "./CalculatorButton.module.css";
const CalculatorButton=({singlebutton})=>{
    return <button className={css.button}>{singlebutton}</button>
}
export default CalculatorButton;