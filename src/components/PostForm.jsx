import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { MyButton } from './UI/button/MyButton.jsx';
import { MyInput } from './UI/input/MyInput.jsx';

const PostForm = ({ create }) => {
    const [post, setPost] = useState({ title: '', body: '' });

    const addNewPost = (e) => {
        e.preventDefault();

        const newPost = {
            id: nanoid(),
            ...post
        }
        create(newPost);
        setPost({ title: '', body: '' })
    }
    return (
        <form>
            <MyInput
                value={post.title}
                onChange={(evt) => setPost({ ...post, title: evt.target.value })}
                type="text"
                placeholder='Post title'
            ></MyInput>

            <MyInput
                value={post.body}
                onChange={(evt) => setPost({ ...post, body: evt.target.value })}
                type="text"
                placeholder='Post desctiption'
            ></MyInput>

            <MyButton onClick={addNewPost} >Add post</MyButton>
        </form>
    );
};

export { PostForm };
