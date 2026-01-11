import Val from "./Val";
const FoodList = ({Item6}) => {
    
    return (
        <ul className="list-group">
            {Item6.map((val) => (
                <Val key={val} foodItem1={val}></Val>
            ))}
        </ul>
    );
};
export default FoodList;
