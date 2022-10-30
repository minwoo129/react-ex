import React, { useCallback, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import { TodoType } from './types/commonType';

const App = () => {
  const [todos, setTodos] = useState<TodoType[]>([
    {
      id: 1,
      text: '리액트의 기초 알아보기',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링해 보기',
      checked: true,
    },
    {
      id: 3,
      text: '일정 관리 앱 만들어 보기',
      checked: false,
    },
  ]);
  const nextId = useRef<number>(4);

  const onInsert = useCallback(
    (text: string) => {
      const todo: TodoType = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos([...todos, todo]);
      nextId.current += 1;
    },
    [todos],
  );

  const onRemove = useCallback(
    (id: number) => {
      setTodos([...todos.filter((item) => item.id != id)]);
    },
    [todos],
  );

  const onToggle = useCallback(
    (id: number) => {
      const newTodos = todos.map((item) => {
        if (item.id == id) {
          item = {
            ...item,
            checked: !item.checked,
          };
        }
        return item;
      });
      setTodos(newTodos);
    },
    [todos],
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
