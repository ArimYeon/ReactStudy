import React from "react";
import TodoListItem from './TodoListItem'

function Todolist(props) {
  const { todoList, updateTodo, deleteTodo } = props;

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th style={{ width: "10%" }}>ID</th>
            <th>Todo</th>
            <th style={{ width: "10%" }}>Complete</th>
            <th style={{ width: "10%" }}>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todoList.map(todo => <TodoListItem key={todo.id}
            todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />)}
          {/* 
            이렇게 만들면 하나만 수정해도 데이터 있는 수 만큼 다 새로 그림
            {todoList.map(todo => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.text}</td>
                <td>update</td>
                <td>delete</td>
              </tr>
              ))} 
           */}
        </tbody>
      </table>
    </div>
  );
}
export default Todolist;
