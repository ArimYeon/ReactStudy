import React, { useCallback, useEffect, useRef, useState } from "react";
import { produce } from 'immer'

import TodoForm from './TodoForm'
import TodoList from './TodoList'

const makeTodo = () => {
  const todos = [];
  for (let i = 1; i <= 5; i++) {
    todos.push({ id: i, text: `${i}번째 할 일`, done: false });
  }
  return todos;
};

const TodoTemplate = () => {
  const [todoList, setTodoList] = useState(makeTodo());
  const cnt = useRef(6);

  const addTodo = useCallback((text) => {
    setTodoList((todoList) => {
      const todo = { id: cnt.current++, text, done: false };
      return produce(todoList, draft => {
        draft.push(todo);
      })
    });
  }, []);

  const updateTodo = useCallback((id) => {
    setTodoList((todoList) => {
      return produce(todoList, draft => {
        const idx = draft.findIndex(todo => todo.id === id);
        draft[idx].done = !draft[idx].done;
      })
    });
  }, []);

  const deleteTodo = useCallback((id) => {
    setTodoList((todoList) => {
      return produce(todoList, draft => {
        const idx = draft.findIndex(todo => todo.id === id);
        draft.splice(idx, 1);
      })
    });
  }, []);

  /*
  // 이렇게 적으면 의존성 생김
  const updateTodo = useCallback((id) => {
    const todos = todoList.map(todo => {
      if (todo.id === id) return { ...todo, done: !todo.done }
      else return todo;
    });
    setTodoList(todos);
  }, [todoList]);

  const deleteTodo = useCallback((id) => {
    const todos = todoList.filter(todo => {
      if (todo.id !== id) return true
      else return false;
    });
    setTodoList(todos);
  }, [todoList]);
  */

  // useEffect 사용해서 최초 한 번만 데이터 취득하도록 구현
  useEffect(() => {
    // Ajax를 이용해 데이터 취득
    // setTodoList(Ajax의 결과값 주입); => todoList 데이터 바뀌니까 리렌더링 됨
  }, []);

  return (
    <div>
      <h3>Todo List</h3>

      <TodoForm addTodo={addTodo}></TodoForm>
      <TodoList todoList={todoList} updateTodo={updateTodo} deleteTodo={deleteTodo}></TodoList>
    </div>
  );
};
export default TodoTemplate;
