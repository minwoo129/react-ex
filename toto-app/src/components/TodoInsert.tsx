import React, {
  ChangeEvent,
  FC,
  FormEvent,
  useCallback,
  useState,
} from 'react';
import { MdAdd } from 'react-icons/md';
import { TodoInsertProps } from '../types/commonType';
import './TodoInsert.scss';

const TodoInsert: FC<TodoInsertProps> = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      onInsert(value);
      setValue('');
      e.preventDefault();
    },
    [onInsert, value],
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요."
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
