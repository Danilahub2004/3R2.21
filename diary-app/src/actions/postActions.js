
export const deletePost = postId => {
    return {
      type: 'DELETE_POST',
      payload: postId
    };
  };
  
  export const editPost = (postId, newText) => {
    return {
      type: 'EDIT_POST',
      payload: {
        postId,
        newText
      }
    };
  };
  