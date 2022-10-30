import React, { useCallback, useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import { TodoType } from './types/commonType';

const App = () => {
  const createBulkTodos = () => {
    let array: TodoType[] = [];
    for (let i = 1; i <= 2500; i++) {
      array.push({
        id: i,
        text: `할 일 ${i}`,
        checked: false,
      });
    }
    return array;
  };
  const [todos, setTodos] = useState<TodoType[]>(createBulkTodos);
  const nextId = useRef<number>(4);

  const onInsert = useCallback((text: string) => {
    const todo: TodoType = {
      id: nextId.current,
      text,
      checked: false,
    };
    setTodos((todos) => todos.concat(todo));
    nextId.current += 1;
  }, []);

  const onRemove = useCallback((id: number) => {
    setTodos((todos) => todos.filter((item) => item.id != id));
  }, []);

  const onToggle = useCallback((id: number) => {
    setTodos((todos) =>
      todos.map((item) =>
        item.id == id ? { ...item, checked: !item.checked } : item,
      ),
    );
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
