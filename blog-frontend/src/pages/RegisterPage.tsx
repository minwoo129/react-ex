import React, { FC } from 'react';
import AuthForm from '../components/auth/AuthForm';
import AuthTemplate from '../components/auth/AuthTemplate';
import RegisterForm from '../components/auth/RegisterForm';
import { RegisterPageProps } from './pageType';

const RegisterPage: FC<RegisterPageProps> = ({}) => {
  return (
    <AuthTemplate>
      <RegisterForm />
    </AuthTemplate>
  );
};

export default RegisterPage;
