import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllPosts, getPostsStatus, getPostsError } from '../features/posts/postsSlice';
import Post from '../components/Post';
import SidebarPost from '../components/SidebarPost';
import { getPosts } from '../actions/postsActions';

function PostFeed() {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const status = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  useEffect(() => {
    if (!posts.length) {
      dispatch(getPosts());
    }
  }, []);

  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [dispatch, error]);

  if (status === 'loading') {
    return (
      <div className='min-h-screen grid place-items-center'>
        <div className='w-6 aspect-square border-t border-t-black rounded-full animate-spin'></div>
      </div>
    )
  }
  return (
    status === 'succeeded' && (
      <main className="w-11/12 max-w-4xl mx-auto py-8 md:flex md:gap-4">
        <section className='space-y-6 md:flex-[0.7]'>
          {
            posts.length && posts.slice(0, 10).map(post => (
              <Post key={post.id} post={post} />
            ))
          }
        </section>
        <aside className='md:flex-[0.3] space-y-3'>
          {
            posts.length && posts.slice(0, 3).map(post => (
              <SidebarPost key={post.id} post={post} />
            ))
          }
        </aside>
      </main>
    )
  );
}

export default PostFeed;