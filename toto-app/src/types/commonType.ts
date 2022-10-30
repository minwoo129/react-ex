export type TodoListProps = {
  todos: TodoType[];
};

export type TodoListItemProps = {
  todo: TodoType;
};

export type TodoInsertProps = {
  onInsert(value: string): void;
};

export type TodoType = {
  id: number;
  text: string;
  checked: boolean;
};
