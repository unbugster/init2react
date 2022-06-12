import './App.css';
import React, { useState } from 'react';
import { PostList } from './components/PostList.jsx';
import { PostForm } from './components/PostForm.jsx';
import { MySelect } from './components/UI/select/MySelect';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaSctipt", body: "Amazing!" },
    { id: 2, title: "Python", body: "Ssssssuper" },
    { id: 3, title: "C++", body: "Bip bup bop" },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const [selectedSort, setSelectedSort] = useState('');

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: '20px 0' }}></hr>
      <div>
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Sort"
          options={[
            { value: 'title', name: 'by Name' },
            { value: 'body', name: 'by Description' }
          ]}
        />
      </div>
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
