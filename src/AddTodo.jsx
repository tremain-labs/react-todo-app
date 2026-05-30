import { useState } from "react";

function AddTodo({ addTodo }) {
    const [task, setTask] = useState("");
    return (
        <div>
            <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Enter a task" />
            <button onClick={() => {
                addTodo(task);
                setTask("");
            }}>Add Task</button>
        </div>
    )
}
export default AddTodo;