import React, { useState } from 'react';
import CommentForm from './CommentForm';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

const Comment = ({ comments, removeComment, updateComment }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });
  const [noOfCommentsToShow, setNoOfCommentsToShow]= useState(3)

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
  //if number of comments is bigger than 3 then the view more button
  // will appear, if you click view more it will show you more comments(10 or less)
  
  //"user" will be replaced with the name of the user who posted the comment.
  return <>
    {comments.map((comment, index) => {
      if(index+1>noOfCommentsToShow) return false
      return <>
          <div class="card" id="comment-card">
            <div class="card-body" id="comment-card-body"> 
            <h6 class="card-subtitle mb-2 text-muted">user wrote:</h6>
              <span id="text"> 
                <div key={comment.id} >
                  {comment.text}
                </div> 
              </span>
              <div className="icons" id="icons" >
                <DropdownButton id="dropdown-btn" title={<i class="bi bi-three-dots-vertical"></i>}>
                  <button id="btn-icon" onClick={() => setEdit({ id: comment.id, value: comment.text })}><Dropdown.Item ><i class="bi bi-pencil-square"></i> Edit</Dropdown.Item></button>
                  <button id="btn-icon" onClick={() => removeComment(comment.id)}><Dropdown.Item ><i class="bi bi-trash-fill"></i> Delete</Dropdown.Item></button>
                </DropdownButton>
              </div>
            </div>
          </div>
        
        </>
      }
    )
    }
    {noOfCommentsToShow<comments.length &&(
      <button id="showMoreBtn"
        onClick={()=>{setNoOfCommentsToShow(noOfCommentsToShow+10)}}
      >
        View More
      </button>
      )
    }
</>
};


export default Comment;
