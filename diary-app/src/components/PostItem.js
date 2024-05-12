import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deletePost, editPost } from '../actions';

const PostItem = ({ post }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(post.title);

  const handleDelete = () => {
    dispatch(deletePost(post.id));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    dispatch(editPost(post.id, editedText));
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <textarea value={editedText} onChange={e => setEditedText(e.target.value)} />
          <button onClick={handleSave}>Сохранить</button>
          <button onClick={() => setIsEditing(false)}>Закрыть</button>
        </div>
      ) : (
        <div>
          <p>{post.title}</p>
          <button onClick={handleEdit}>Редактировать</button>
          <button onClick={handleDelete}>Удалить</button>
          {/* Add CommentList component here */}
        </div>
      )}
    </div>
  );
};

export default PostItem;
