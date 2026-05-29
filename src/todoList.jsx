import Todo from "./todo";

function TodoList({todos, deleteTodo, toggleTodo}) {
    return (
        <ol>
            {todos.map(todo =>  (
                <Todo key={todo.id} {...todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
                    )
                )
            }
        </ol>
    )
}
export default TodoList