import { useState } from "react";
function Todo({task, priority, id, deleteTodo}){
  
  const [isdone, setDone] = useState(false)
  return ( 
  <>     
        <li>{task} - Priority: {priority} - Completed Status: {isdone ? "✅" : "⬜"}<input type="checkbox" onClick={() => setDone(!isdone)} />
        <button onClick={() => deleteTodo(id)}>Delete</button></li>
  </>     
  ); 
  
}
export default Todo;