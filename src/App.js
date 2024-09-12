import React, { useState, useEffect } from 'react';
import jsonp from 'jsonp'; // Import the JSONP library
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Make a JSONP request
    jsonp('http://myblog.test/posts?callback=callback', null, (err, data) => {
      if (err) {
        console.error('Error fetching posts:', err);
      } else {
        console.log(data); // Logs data to ensure it's correct
        setPosts(data); // Update state with fetched posts
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <h1>Blog Posts</h1>
        <Routes>
          <Route
            path="/posts"
            element={
              <div>
                {posts.length > 0 ? (
                  posts.map((post) => (
                    <div key={post._id}>
                      <h2>{post.title}</h2>
                      {/* Ensure 'content' is being displayed */}
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
