import { useState } from "react";
import Val from "./Val";
const FoodList = ({Item6}) => {
    let[activeItems,setActiveItem]=useState([]);
    const onBuyButton=(val,e)=>{
        let newItem=[...activeItems,val];
        setActiveItem(newItem);

    }
    return (
        <ul className="list-group">
            {Item6.map((val) => (

                <Val
                 key={val}
                 foodItem1={val}
                 bought={activeItems.includes(val)}
                 handlerclickbtn={(e)=>onBuyButton(val,e)}
                ></Val>
            ))}
        </ul>
    );
};
export default FoodList;
