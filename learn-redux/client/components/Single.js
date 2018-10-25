import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

const Single = (props) => {
  const { posts, params, comments } = props;
  const { postId } = params;
  const i = posts.findIndex((post) => post.code === postId);
  const post = posts[i];
  const postComments = comments[postId] || [];

  return (
    <div>
      <div className="single-photo">
        <Photo i={i} post={post} {...props} />
        <Comments postComments={postComments} />
      </div>
    </div>
  );
};

export default Single;
