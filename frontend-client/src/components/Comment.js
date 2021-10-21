import React, { useState } from 'react';
import CommentForm from './CommentForm';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

const Comment = ({ comments, removeComment, updateComment }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateComment(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <CommentForm edit={edit} onSubmit={submitUpdate} />;
  }

  return comments.map((comment, index) => (
    <>
        <div class="card" id="comment-card">
          <div class="card-body" id="comment-card-body">
  
          <span id="text"> 
            <div key={comment.id} >
              {comment.text}
            </div> 
          </span>

          <div className="icons" id="icons" >
            <DropdownButton id="dropdown-btn" title={<i class="bi bi-three-dots-vertical"></i>}>
              <button id="btn-icon" onClick={() => setEdit({ id: comment.id, value: comment.text })}><Dropdown.Item href="#/action-1" ><i class="bi bi-pencil-square"></i> Edit</Dropdown.Item></button>
              <button id="btn-icon" onClick={() => removeComment(comment.id)}><Dropdown.Item href="#/action-2"><i class="bi bi-trash-fill"></i> Delete</Dropdown.Item></button>
            </DropdownButton>
          </div>
          </div>
      </div>
       
    </>
  ));
};


export default Comment;
