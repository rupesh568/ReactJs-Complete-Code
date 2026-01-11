const ToDoItem = ({Todoname, Tododate,handlerOnDelete}) => {
    return (
        <div className="container">
            <div className="row kg-row">
                <div className="col-6">{Todoname}</div>
                <div className="col-4">{Tododate}</div>
                <div className="col-2">
                    <button 
                    type="button" 
                    class="btn btn-danger kg-button"
                    onClick={()=>handlerOnDelete(Todoname,Tododate)}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};
export default ToDoItem;
