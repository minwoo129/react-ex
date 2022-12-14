import React, { FC } from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';
import { TodoListProps } from '../types/commonType';

const TodoList: FC<TodoListProps> = ({ todos, onRemove, onToggle }) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => {
        return (
          <TodoListItem
            todo={todo}
            key={todo.id}
            onRemove={onRemove}
            onToggle={onToggle}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
