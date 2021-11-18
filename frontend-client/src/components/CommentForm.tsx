import React, { useState, useEffect, useRef } from 'react';
import './Comment.css';

import 'bootstrap-icons/font/bootstrap-icons.css';
import { render } from '@testing-library/react';

class CommentForm extends React.Component<any,any> {
  constructor(props:any){
    super(props);
    this.state={
      input:''
    }
  }

  handleChange = (e:any) => {
    this.setState({input: e.target.value});
  };

  handleSubmit = (e:any) => {
    e.preventDefault();

    this.props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: this.state.input
    });
    this.setState({input:''});
  };

  render(){
    return (
      <form onSubmit={this.handleSubmit} className='comment-form'>
        {this.props.edit ? (
          <>
          <div className="container" id="comment-container-edit">
            <div className="input-group" id="comment-input-group">
              <span className="input-group-text" id="addon-wrapping"><i className="bi bi-pencil-fill"></i></span>
              <textarea className="form-control comment-input" cols={50} id="comment-box" rows={2} 
                placeholder='Edit comment..'
                value={this.state.input}
                onChange={this.handleChange}
                name='text'
              />
            </div>

            <div className="text-right btn btn-outline-primary"><button type="button" onClick={this.handleSubmit}>Save</button></div>
          </div> 
          </>
        ) : (
          <>
          <div className="container" id="comment-container">
            <div className="input-group" >
              <span className="input-group-text" id="addon-wrapping"><i className="bi bi-bookmark-plus-fill"></i></span>
              <textarea className="form-control comment-input" cols={50} id="comment-box" rows={1} 
                placeholder='Write comment..'
                value={this.state.input}
                onChange={this.handleChange}
                name='text'
              />
            </div>

            <div className=" text-right"><button type="button" className="btn btn-outline-primary">Post</button></div>
          </div> 
          </>
        )}
      </form>
    );
  }
}

export default CommentForm;
