import React from 'react';
import { useDispatch } from 'react-redux';
import { addReaction } from '../features/posts/postsSlice';

function Reactions({ post }) {
  const dispatch = useDispatch();

  const reactionEmojis = {
    like: '👍',
    wow: '😲',
    heart: '❤',
    rocket: '🚀',
    coffee: '☕'
  };

  return (
    <div className='flex gap-4'>
      {
        Object.entries(reactionEmojis).map(([reaction, emoji], i) => (
          <button key={i} onClick={() => dispatch(addReaction({ postId: post.id, reaction }))}>
            {emoji} {post.reactions[reaction]}
          </button>
        ))
      }
    </div>
  );
}

export default Reactions;