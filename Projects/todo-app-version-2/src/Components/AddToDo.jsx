import css from "./AddToDo.module.css";



function AddToDo({initialDate,initialName,handlerOnChange,handlerOnSelect,handleOnClick}) {
    return(
    <div className="container text-center">
        <div className={`${css["input"]} ${css["kg-button"]} row kg-row `}>
            <div className="col-6">
                <input type="text" 
                placeholder="Enter Todo Here"
                value={initialName}
                onChange={(e)=>handlerOnChange(e.target.value)}
                
                
                />
            </div>
            <div className="col-4">
                <input type="date"value={initialDate} onChange={(e)=>handlerOnSelect(e.target.value)}  />
            </div>
            <div className="col-2">
                <button type="button" className="btn btn-success kg-button" onClick={handleOnClick}>
                    Add
                </button>
            </div>
        </div>
    </div>
    );
}
export default AddToDo;
