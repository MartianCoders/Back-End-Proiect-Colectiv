import React, { useState } from 'react';
import CommentForm from './CommentForm';
import Comment from './Comment';
import '../style-comment.css';


function CommentList() {
  const [comments, setComments] = useState([]); // <-- initial state

  const addComment = (comment) => {
    if (!comment.text || /^\s*$/.test(comment.text)) {
      return;
    }

    setComments((comments) => [comment, ...comments]);
  };

  const updateComment = (id, newComment) => {
    if (!newComment.text || /^\s*$/.test(newComment.text)) {
      return;
    }

    setComments((comments) => comments.map((comment) => (comment.id === id ? newComment : comment)));
  };

  const removeComment = (id) => {
    setComments((comments) => comments.filter((comment) => comment.id !== id));
  };


  return (
    <>
    <div class="container" id="comments-component">
      <CommentForm onSubmit={addComment} />
      <Comment
        comments={comments}
        removeComment={removeComment}
        updateComment={updateComment}
      />
    </div>
    </>
  );
}


export default CommentList;
