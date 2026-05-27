function Todo({task, priority, completed}) {
  return (      
        <li>{task} - Priority: {priority} - Completed: {completed ? "✅" : "⬜"}</li>

  );
}

export default Todo;