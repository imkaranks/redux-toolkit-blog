import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllUsers } from '../features/users/usersSlice';
import { getPostsError } from '../features/posts/postsSlice';
import { createPost } from '../actions/postsActions';

function AddPost() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector(selectAllUsers);
  const error = useSelector(getPostsError);

  const [title, setTitle] = useState('');
  const [userId, setUserId] = useState('');
  const [body, setBody] = useState('');

  const canPost = title.trim() && userId.trim() && body.trim();

  const submitHandler = (e) => {
    e.preventDefault();

    if (canPost) {
      dispatch(createPost({userId: +userId, title, body}));
    }

    setTitle('');
    setUserId('');
    setBody('');

    navigate('/');
  }

  return (
    <div className='w-11/12 max-w-4xl mx-auto'>
      <form className='space-y-6' onSubmit={submitHandler}>
        <div className="grid gap-1">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="w-full p-2 border"
            id='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="grid gap-1">
          <label htmlFor="author">Author</label>
          <select
            className="w-full p-2 border"
            id='author'
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          >
            <option value=''>---</option>
            {
              users.length && users.map((user, i) => (
                <option value={user.id}>{user.name}</option>
              ))
            }
          </select>
        </div>
        <div className="grid gap-1">
          <label htmlFor="body">Body</label>
          <textarea
            className="w-full p-2 border"
            id='body'
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>

        <button
          type="submit"
          disabled={!canPost}
          className='px-8 py-2 bg-blue-600 text-white font-medium disabled:bg-blue-600/50'
        >
          Post
        </button>
      </form>
    </div>
  );
}

export default AddPost;