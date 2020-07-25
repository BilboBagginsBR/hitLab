import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../actions/post';
import { getPostState } from '../../actions/selectors';
import PostItem from './PostItem';
import PostForm from './PostForm';

const Posts = () => {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector(getPostState);
  useEffect(() => {
    dispatch(getPosts());
  }, []);
  return (
    <Fragment>
      <h1>Posts</h1>
      <p> Welcome to the community</p>
      <PostForm />
      <div>
        {posts.map((post) => (
          <PostItem key={post._id} post={post} />
        ))}
      </div>
    </Fragment>
  );
};

export default Posts;
