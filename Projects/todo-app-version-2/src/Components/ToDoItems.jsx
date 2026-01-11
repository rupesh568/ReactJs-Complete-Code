import css from "./ToDoItems.module.css";
import ToDoItem from "./ToDoItem";
const ToDoItems = ({ todoItems,handlerOnDelete }) => {
    return<>
    <div className={`${css["item-align"]}`}>
        {todoItems.map((val) => (
            <ToDoItem 
                Todoname={val["todoname"]}
                Tododate={val["tododata"]}
                handlerOnDelete={handlerOnDelete}

            ></ToDoItem>
        ))}
        ;
    </div>;
    </>
};
export default ToDoItems;
