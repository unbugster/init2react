import './App.css';
import React, { useMemo, useState } from 'react';
import { PostList } from './components/PostList.jsx';
import { PostForm } from './components/PostForm.jsx';
import { PostFilter } from './components/PostFilter';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaSctipt", body: "Amazing!" },
    { id: 2, title: "Python", body: "Ssssssuper" },
    { id: 3, title: "C++", body: "Bip bup bop" },
  ]);

  const [filter, setFilter] = useState({ sort: '', query: '' })

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
    }
    return posts;
  }, [filter.sort, posts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) => post.title.toLowerCase().includes(filter.query.toLocaleLowerCase()))
  }, [filter.query, sortedPosts]);

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: '20px 0' }}></hr>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      <PostList posts={sortedAndSearchedPosts} title={'Post list 1'} remove={removePost} />
    </div >
  );
};

export default App;
