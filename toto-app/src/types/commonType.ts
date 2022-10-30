interface TodoListItemCommonProps {
  onRemove(id: number): void;
}

export interface TodoListProps extends TodoListItemCommonProps {
  todos: TodoType[];
}

export interface TodoListItemProps extends TodoListItemCommonProps {
  todo: TodoType;
}

export interface TodoInsertProps {
  onInsert(value: string): void;
}

export type TodoType = {
  id: number;
  text: string;
  checked: boolean;
};
