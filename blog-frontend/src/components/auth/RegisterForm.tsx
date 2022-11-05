import React, { ChangeEvent, FormEvent, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, initializeForm, register } from '../../modules/actions/auth';
import { RootState } from '../../modules/reducer';
import AuthForm from './AuthForm';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const {form, auth, authError} = useSelector((state: RootState) => ({
    form: state.auth.register,
    auth: state.auth.auth,
    authError: state.auth.authError
  }));

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
    const {username, password, passwordConfirm} = form;
    if(password != passwordConfirm) {
      // 오류 처리
      return;
    }
    dispatch(register({username, password}))
  }

  useEffect(() => {
    dispatch(initializeForm('register'));
  }, [dispatch]);

  useEffect(() => {
    if(authError) {
      console.log('오류 발생');
      console.log('authError: ', authError)
    }
    if(auth) {
      console.log('회원가입 성공');
      console.log('auth: ', auth);
    }
  }, [auth, authError])

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
