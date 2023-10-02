import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { selectPostById } from '../features/posts/postsSlice';
import { selectAllUsers } from '../features/users/usersSlice';
import { deletePost } from '../actions/postsActions';
import Reactions from '../components/Reactions';

function PostDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const post = useSelector((state) => selectPostById(state, Number(id)));
  const users = useSelector(selectAllUsers);

  function deletePostHandler() {
    dispatch(deletePost(Number(id)));

    navigate('/');
  }

  return (
    post && (
      <article className='w-11/12 max-w-4xl mx-auto py-8' key={post.id}>
        <img className='w-full h-60 object-cover' src="https://plus.unsplash.com/premium_photo-1679511318023-eba7391b0afa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" alt="" />
        <h2 className='text-2xl font-semibold capitalize leading-none'>{post.title}</h2>
        <cite>{users.find(user => user.id === post.userId).name}</cite>
        <p>{post.body}</p>
        <Reactions post={post} />
        <div className='flex items-center gap-4'>
          <Link to={`/edit/${id}`}>Edit</Link>
          <button onClick={deletePostHandler}>Delete</button>
        </div>
      </article>
    )
  );
}

export default PostDetails;