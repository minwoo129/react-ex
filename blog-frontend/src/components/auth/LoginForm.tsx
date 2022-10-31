import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../modules/reducer';

const LoginForm = () => {
  const dispatch = useDispatch();
  const form = useSelector((state: RootState) => state.auth.login);
};
