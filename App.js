import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BlogPosts from './components/BlogPosts'; // Assuming BlogPosts.tsx is in the components directory

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BlogPosts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;