import React, { useState, useEffect, useRef } from 'react';
import '../style-comment.css';

import 'bootstrap-icons/font/bootstrap-icons.css';

function CommentForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  return (
        
    <form onSubmit={handleSubmit} className='comment-form'>
      {props.edit ? (
        <>
        <div class="container" id="comment-container-edit">
          <div class="input-group" id="comment-input-group">
            <span class="input-group-text" id="addon-wrapping"><i class="bi bi-pencil-fill"></i></span>
            <textarea class="form-control" cols="50" id="comment-box" rows="2" 
              placeholder='Edit comment..'
              value={input}
              onChange={handleChange}
              name='text'
              className='comment-input'
              ref={inputRef}
            />
          </div>

          <div class="text-right"><button type="button" onClick={handleSubmit} class="btn btn-outline-primary">Save</button></div>
        </div> 
        </>
      ) : (
        <>
        <div class="container" id="comment-container">
          <div class="input-group" >
            <span class="input-group-text" id="addon-wrapping"><i class="bi bi-bookmark-plus-fill"></i></span>
            <textarea class="form-control" cols="50" id="comment-box" rows="1" 
              placeholder='Write comment..'
              value={input}
              onChange={handleChange}
              name='text'
              className='comment-input'
              ref={inputRef}
            />
          </div>

          <div class="text-right"><button type="button" onClick={handleSubmit} class="btn btn-outline-primary">Post</button></div>
        </div> 
        </>
      )}
    </form>
  );
}

export default CommentForm;
