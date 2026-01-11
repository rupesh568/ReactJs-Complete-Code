import css from "./val.module.css";
const Val = ({foodItem1,bought,handlerclickbtn}) => {
    const handler1=(e)=>{
        console.log(e);
        console.log(`${foodItem1} is being bought`);

    }
    return (
        <li className={`${css["kg-item"]} list-group-item ${bought && "active"}`}>
            <span className={`${css["kg-list"]}`}>{foodItem1}</span>
            <button className={`${css.button} btn btn-info`} 
            onClick={handlerclickbtn}
            >Buy</button>
        </li>
    );
};
export default Val;
