
function Todo({task, priority, id, deleteTodo, toggleTodo, completed}) {
  

  return ( 
  <>     
        <li>{task} - Priority: {priority} - Completed Status: {completed ? "✅" : "⬜"}<input type="checkbox" checked={completed} onChange={() => toggleTodo(id)} />
        <button onClick={() => deleteTodo(id)}>Delete</button></li>
  </>     
  ); 
  
}
export default Todo;