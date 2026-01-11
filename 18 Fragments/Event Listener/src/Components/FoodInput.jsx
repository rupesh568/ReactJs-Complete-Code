import css from "./FoodInput.module.css";
const FoodInput = ({handleronKeyDown}) => {
    // const handleronChange = (e) => {
    //     console.log(e.target.value);
    // };
    return<input
        type="text"
        className={css.Input}
        placeholder="Enter the Food Name"
        onKeyDown={handleronKeyDown}
    />;
};
export default FoodInput;
