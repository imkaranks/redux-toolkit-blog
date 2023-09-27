import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import PostFeed from './pages/PostFeed';
import AddPost from './pages/AddPost';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<PostFeed />} />
          <Route path='create' element={<AddPost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;