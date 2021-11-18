import React, { useState } from 'react';
import CommentForm from './CommentForm';
import Comment from './Comment';
import '../style-comment.css';


class CommentList extends React.Component<any,any> {
  constructor(props:any){
    super(props);
    this.state={
      comments:[]
    }
  }
  

  render() {
  return (
    <div className="container" id="comments-component">
      <CommentForm  />
      <Comment
        comments={this.state.comments}
      />
    </div>
  );}
}


export default CommentList;
