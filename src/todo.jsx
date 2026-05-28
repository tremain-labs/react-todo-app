import { useState } from "react";
function Todo({task, priority,}){
  const [isdone, setDone] = useState(false)
  return (      
        <li>{task} - Priority: {priority} - Completed Status: {isdone ? "✅" : "⬜"}<input type="checkbox" onClick={() => setDone(!isdone)} /></li>

  );
}
export default Todo;