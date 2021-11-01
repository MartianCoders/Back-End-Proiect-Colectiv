import React, { useState } from 'react';
import CommentForm from './CommentForm';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

class Comment extends React.Component<any,any> {
  constructor(props:any){
    super(props);
    this.state={
      comments: [{id:'1',text:'first comment'},{id:'2',text:'second comment'}],
      noOfCommentsToShow:3
    }
  }
  
  //if number of comments is bigger than 3 then the view more button
  // will appear, if you click view more it will show you more comments(10 or less)
  
  //"user" will be replaced with the name of the user who posted the comment.
  render() {

  return <>
    {this.state.comments.map((comment:any, index:any) => {
      if(index+1>this.state.noOfCommentsToShow) return false
      return <>
          <div className="card" id="comment-card">
            <div className="card-body" id="comment-card-body"> 
            <h6 className="card-subtitle mb-2 text-muted">user wrote:</h6>
              <span id="text"> 
                <div key={comment.id} >
                  {comment.text}
                </div> 
              </span>
              <div className="icons" id="icons" >
                <DropdownButton id="dropdown-btn" title={<i className="bi bi-three-dots-vertical"></i>}>
                  <button id="btn-icon" ><Dropdown.Item ><i className="bi bi-pencil-square"></i> Edit</Dropdown.Item></button>
                  <button id="btn-icon" ><Dropdown.Item ><i className="bi bi-trash-fill"></i> Delete</Dropdown.Item></button>
                </DropdownButton>
              </div>
            </div>
          </div>
        
        </>
      }
    )
    }
    {this.state.noOfCommentsToShow<this.state.comments.length &&(
      <button id="showMoreBtn"
        onClick={()=>{this.setState({noOfCommentsToShow: this.state.noOfCommentsToShow+10}) }}
      >
        View More
      </button>
      )
    }
  </>
  };
}


export default Comment;

