export const increment = (index) => {
  return {
    type: 'INCREMENT_LIKES',
    index
  };
};

export const addComment = (postId, author, commment) => {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    commment
  };
};

export const removeComment = (postId, i) => {
  return {
    type: 'REMOVE_COMMENT',
    i,
    postId
  };
};
