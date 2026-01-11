import css from "./InputBox.module.css";
const InputBox = ({calVal}) => {
    
    return <input 
    type="text" 
    className={css.inputContainer} 
    value={calVal} readOnly
    />;
};
export default InputBox;
