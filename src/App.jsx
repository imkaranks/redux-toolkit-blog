import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import PostFeed from './pages/PostFeed';
import AddPost from './pages/AddPost';
import PostDetails from './pages/PostDetails';
import EditPost from './pages/EditPost';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<PostFeed />} />
          <Route path='create' element={<AddPost />} />
          <Route path=':id' element={<PostDetails />} />
          <Route path='edit/:id' element={<EditPost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;