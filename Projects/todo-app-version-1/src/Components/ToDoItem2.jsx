function ToDoItem2() {
    let task1="Go To College";
    let date="4/10/2026";
    return (
        <div class="container">
            <div class="row kg-row">
                <div class="col-6">{task1}</div>
                <div class="col-4">{date}</div>
                <div class="col-2">
                    <button type="button" class="btn btn-danger kg-button">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}
export default ToDoItem2;
