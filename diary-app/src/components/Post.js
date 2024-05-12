
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deletePost, editPost } from '../actions/postActions';
import CommentList from './CommentList';

const Post = ({ post }) => {
  const dispatch = useDispatch();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editedPostText, setEditedPostText] = useState(post.title);

  const handleDelete = () => {
    dispatch(deletePost(post.id));
  };

  const handleEdit = () => {
    dispatch(editPost(post.id, editedPostText));
    setIsEditModalOpen(false);
  };

  return (
    <div className="post">
      <h2>{post.title}</h2>
      <button onClick={handleDelete}>Удалить</button>
      <button onClick={() => setIsEditModalOpen(true)}>Редактировать</button>
      <button>Показать коменнтарии</button>
      {isEditModalOpen && (
        <div className="modal">
          <textarea value={editedPostText} onChange={e => setEditedPostText(e.target.value)} />
          <button onClick={handleEdit}>Save</button>
          <button onClick={() => setIsEditModalOpen(false)}>Закрыть</button>
        </div>
      )}
      <CommentList comments={post.comments} />
    </div>
  );
};

export default Post;
