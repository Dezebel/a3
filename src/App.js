import React, { useState, useEffect } from 'react';

function App() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/posts', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then(response => response.json())
        .then(data => {
            setPosts(data);       // Update the posts state with the fetched data
            setLoading(false);    // Set loading to false as data has been loaded
        })
        .catch(error => {
            console.error("Error fetching posts:", error);
            setLoading(false);    // Ensure loading is set to false in case of error too
        });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="App">
            <h1>Blog Posts</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
