import React, { ChangeEvent, FormEvent, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, initializeForm } from '../../modules/actions/auth';
import { RootState } from '../../modules/reducer';
import AuthForm from './AuthForm';

const LoginForm = () => {
  const dispatch = useDispatch();
  const form = useSelector((state: RootState) => state.auth.login);

  const onChange = (e:ChangeEvent<HTMLInputElement>) => {
    const {value, name} = e.target;
    dispatch(changeField({
      form: 'login',
      key: name,
      value
    }));
  }

  const onSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  useEffect(() => {
    dispatch(initializeForm('login'));
  }, [dispatch]);

  return (
    <AuthForm 
      type='login'
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default LoginForm;
