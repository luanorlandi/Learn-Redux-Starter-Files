import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

const Single = (props) => {
  const { posts, params } = props;
  const i = posts.findIndex((post) => post.code === params.postId);
  const post = props.posts[i];

  return (
    <div>
      <div className="single-photo">
        <Photo i={i} post={post} {...props} />
        <Comments />
      </div>
    </div>
  );
};

export default Single;
