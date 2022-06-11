import './App.css';
import React, { useState, useRef } from 'react';
import { PostList } from './components/PostList.jsx';
import { MyButton } from './components/UI/button/MyButton.jsx';
import { MyInput } from './components/UI/input/MyInput.jsx';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaSctipt1", body: "Description1" },
    { id: 2, title: "JavaSctipt2", body: "Description2" },
    { id: 3, title: "JavaSctipt3", body: "Description3" },
  ]);

  const [title, setTitle] = useState('');
  const addNewPost = (e) => {
    e.preventDefault();
    console.log(bodyInputRef.current.value)
  }

  const bodyInputRef = useRef();

  return (
    <div className="App">
      <form>
        <MyInput
          value={title}
          onChange={(evt) => setTitle(evt.target.value)}
          type="text"
          placeholder='Post title'
        ></MyInput>

        <MyInput
          ref={bodyInputRef}
          type="text"
          placeholder='Post desctiption'
        ></MyInput>

        <MyButton onClick={addNewPost} >Add post</MyButton>
      </form>
      <PostList posts={posts} title={'Post list 1'} />
    </div >
  );
};

export default App;
