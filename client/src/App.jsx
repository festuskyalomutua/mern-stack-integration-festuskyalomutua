import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import PostPage from './pages/Post';
import NewPost from './pages/NewPost';
import EditPost from './pages/EditPost';
import Login from './pages/Login';

function App() {
  return (
    <div className="min-h-screen">
      <nav className="bg-white shadow">
        <div className="container mx-auto px-4 py-3 flex justify-between">
          <Link to="/" className="font-bold">MERN Blog</Link>
          <div className="flex gap-3">
            <Link to="/new" className="text-sm">New Post</Link>
            <Link to="/login" className="text-sm">Login</Link>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:slug" element={<PostPage />} />
          <Route path="/new" element={<NewPost />} />
          <Route path="/edit/:id" element={<EditPost />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
