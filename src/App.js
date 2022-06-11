import './App.css';
import React, { useState } from 'react';
import { PostList } from './components/PostList.jsx';
import { Counter } from './components/Counter';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaSctipt1", body: "Description1" },
    { id: 2, title: "JavaSctipt2", body: "Description2" },
    { id: 3, title: "JavaSctipt3", body: "Description3" },
  ]);

  const [posts2, setPosts2] = useState([
    { id: 1, title: "Python1", body: "Description1 La La" },
    { id: 2, title: "Python2", body: "Description2 La La" },
    { id: 3, title: "Python3", body: "Description3 La La" },
  ]);

  return (
    <div className="App">
      <PostList posts={posts} title={'Post list 1'} />
      <PostList posts={posts2} title={'Post list 2'} />
      <Counter />
    </div >
  );
};

export default App;
