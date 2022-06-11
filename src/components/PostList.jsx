import React from "react";
import { PostItem } from './PostItem';

const PostList = ({ posts, title, remove }) => {

    return (
        <div>
            <h1 style={{ textAligh: 'center', marginBottom: '15px' }}>
                {title}
            </h1>
            {posts.map((post, index) =>
                <PostItem remove={remove} number={index + 1} post={post} key={post.id} />)}
        </div>
    );

};

export { PostList }
