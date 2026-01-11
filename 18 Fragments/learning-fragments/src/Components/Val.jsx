import css from "./val.module.css";
const Val = ({foodItem1}) => {
    return (
        <li className={`${css["kg-item"]} list-group-item`}>
            <span className={`${css["kg-list"]}`}>{foodItem1}</span>
        </li>
    );
};
export default Val;
