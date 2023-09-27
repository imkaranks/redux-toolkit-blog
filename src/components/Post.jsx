import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllUsers, getUsersStatus } from '../features/users/usersSlice';
import Reactions from './Reactions';

function Post({ post }) {
  const users = useSelector(selectAllUsers);
  const status = useSelector(getUsersStatus);

  return (
    status === 'succeeded' && (
      <article key={post.id}>
        <img className='w-full aspect-video object-cover' src="https://plus.unsplash.com/premium_photo-1679511318023-eba7391b0afa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" alt="" />
        <h2 className='text-2xl font-semibold capitalize leading-none'>{post.title}</h2>
        <cite>{users.find(user => user.id === post.userId).name}</cite>
        <p>{post.body}</p>
        <Reactions post={post} />
      </article>
    )
  );
}

export default Post;