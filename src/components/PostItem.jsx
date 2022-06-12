import React from "react";

const PostItem = (props) => {

    const deletePostItem = () => {
        props.remove(props.post);
    };

    return (
        <div className='post'>
            <div className='post__content'>
                <strong>{props.number}. {props.post.title}</strong>
                <p>
                    {props.post.body}
                </p>
            </div>
            <div className='post__btn'>
                <button onClick={deletePostItem}>Delete post</button>
            </div>
        </div>
    );
};

export { PostItem };
