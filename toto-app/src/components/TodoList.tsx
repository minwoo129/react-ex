import React, { FC } from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';
import { TodoListProps } from '../types/commonType';

const TodoList: FC<TodoListProps> = ({ todos, onRemove }) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => {
        return <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} />;
      })}
    </div>
  );
};

export default TodoList;
