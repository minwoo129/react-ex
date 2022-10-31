import React, { FC } from 'react';
import AuthForm from '../components/auth/AuthForm';
import AuthTemplate from '../components/auth/AuthTemplate';
import { LoginPageProps } from './pageType';

const LoginPage: FC<LoginPageProps> = ({}) => {
  return (
    <AuthTemplate>
      <AuthForm type="login" />
    </AuthTemplate>
  );
};

export default LoginPage;
