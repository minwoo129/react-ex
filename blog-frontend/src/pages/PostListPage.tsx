import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { sampleAction } from '../modules/actions/auth';
import Button from '../components/common/Button';
import { PostListPageProps } from './pageType';

const PostListPage: FC<PostListPageProps> = ({}) => {
  const dispatch = useDispatch();

  const onPress = () => {
    console.log('onPress');
    dispatch(sampleAction({ count: 8 }));
  };
  return (
    <div>
      <Button onClick={(e) => onPress()}>버튼</Button>
    </div>
  );
};

export default PostListPage;
