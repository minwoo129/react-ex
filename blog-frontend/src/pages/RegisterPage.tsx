import React, { FC } from 'react';
import AuthForm from '../components/auth/AuthForm';
import AuthTemplate from '../components/auth/AuthTemplate';
import { RegisterPageProps } from './pageType';

const RegisterPage: FC<RegisterPageProps> = ({}) => {
  return (
    <AuthTemplate>
      <AuthForm type="register" />
    </AuthTemplate>
  );
};

export default RegisterPage;
