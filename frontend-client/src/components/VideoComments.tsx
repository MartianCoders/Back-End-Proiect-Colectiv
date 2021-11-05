import React, { Component } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import CommentList from './CommentList';

class VideoComments extends React.Component {
    render() {
        return (   
            <CommentList />  
        );
    }
}

export default VideoComments;