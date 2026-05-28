function Todo({task, priority, completed}) {
  return (      
        <li>{task} - Priority: {priority} - Completed Status: {completed ? "✅" : "⬜"}</li>

  );
}

export default Todo;