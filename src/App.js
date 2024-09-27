import React, { useState, useEffect } from 'react';
import jsonp from 'jsonp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; // Ensure you import your CSS file

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    jsonp('https://api.dezebel.com/posts?callback=callback', null, (err, data) => {
      if (err) {
        console.error('Error fetching posts:', err);
      } else {
        console.log(data);
        setPosts(data);
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Blog Posts</h1>
        </header>
        <Routes>
          <Route
            path="/posts"
            element={
              <div>
                {posts.length > 0 ? (
                  posts.map((post) => (
                    <div key={post._id} className="blog-post">
                      <h2>{post.title}</h2>
                      <p>{post.content}</p>
                    </div>
                  ))
                ) : (
                  <p>Loading posts...</p>
                )}
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
