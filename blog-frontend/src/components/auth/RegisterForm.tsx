import React, { ChangeEvent, FormEvent, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, initializeForm } from '../../modules/actions/auth';
import { RootState } from '../../modules/reducer';
import AuthForm from './AuthForm';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const form = useSelector((state: RootState) => state.auth.register);

  const onChange = (e:ChangeEvent<HTMLInputElement>) => {
    const {value, name} = e.target;
    dispatch(changeField({
      form: 'register',
      key: name,
      value
    }));
  }

  const onSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  useEffect(() => {
    dispatch(initializeForm('register'));
  }, [dispatch]);

  return (
    <AuthForm 
      type='register'
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default RegisterForm;
