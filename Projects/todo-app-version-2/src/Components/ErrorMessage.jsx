import css from "./ErrorMessage.module.css";
const ErrorMessage=({item})=>{
    return <>
        {item.length===0 && (<h3 className={css.message}>Enjoy Your Day</h3>)}
    </>
}
export default ErrorMessage;