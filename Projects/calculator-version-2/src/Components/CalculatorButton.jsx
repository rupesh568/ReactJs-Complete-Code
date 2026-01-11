import css from "./CalculatorButton.module.css";
const CalculatorButton = ({ singlebutton ,onButtonClick}) => {
    return <button className={css.button} onClick={()=> onButtonClick(singlebutton)}
    >{singlebutton}</button>;
};
export default CalculatorButton;
