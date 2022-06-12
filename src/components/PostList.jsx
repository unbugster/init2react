import React from "react";
import { PostItem } from './PostItem';

const PostList = ({ posts, title, remove }) => {

    if (!posts.length) {
        return (
            <h1 style={{ color: 'red', fontSize: '28px', textAlign: 'center' }}>
                Posts not found!
            </h1>
        )
    };

    return (
        <div>
            <h1 style={{ textAligh: 'center', marginBottom: '15px' }}>
                {title}
            </h1>
            {posts.map((post, index) =>
                <PostItem remove={remove} number={index + 1} post={post} key={post.id} />
            )}
        </div>
    );

};

export { PostList }
