import './App.css';
import React, { useState } from 'react';
import { PostList } from './components/PostList.jsx';
import { PostForm } from './components/PostForm.jsx';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaSctipt1", body: "Description1" },
    { id: 2, title: "JavaSctipt2", body: "Description2" },
    { id: 3, title: "JavaSctipt3", body: "Description3" },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      {posts.length
        ?
        <PostList posts={posts} title={'Post list 1'} remove={removePost} />
        :
        <h1 style={{ color: 'red', fontSize: '28px', textAlign: 'center' }}>Add new post!</h1>
      }

    </div >
  );
};

export default App;
