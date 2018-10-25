import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

const Single = (props) => {
  const { posts, params, comments, addComment, removeComment } = props;
  const { postId } = params;
  const i = posts.findIndex((post) => post.code === postId);
  const post = posts[i];
  const postComments = comments[postId] || [];

  return (
    <div>
      <div className="single-photo">
        <Photo i={i} post={post} {...props} />
        <Comments
          postComments={postComments}
          postId={postId}
          addComment={addComment}
          removeComment={removeComment}
          i={i}
        />
      </div>
    </div>
  );
};

export default Single;
