import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import "./Review.css";

class Review extends React.Component {
    constructor(props:any) {
        super(props);
    
        this.state = {
          rating: 1
        };
      }
    
      handleClick = (newRating:any) => {
        this.setState({rating: newRating});
        console.log(this.state);
      }

    render() {
        return (
            <div className="container">
                <div className="box">
                    <h4> Leave a review: </h4>
                    <div className="rating">
                        <input type="radio" name="rating" id="one"></input>
                        <label htmlFor="one" onClick={() => this.handleClick(5)}><StarIcon /></label>
                        
                        <input type="radio" name="rating" id="two"></input>
                        <label htmlFor="two" onClick={() => this.handleClick(4)}><StarIcon /></label>
                        
                        <input type="radio" name="rating" id="three"></input>
                        <label htmlFor="three" onClick={() => this.handleClick(3)}><StarIcon /></label>
                        
                        <input type="radio" name="rating" id="four"></input>
                        <label htmlFor="four" onClick={() => this.handleClick(2)}><StarIcon /></label>
                        
                        <input type="radio" name="rating" id="five"></input>
                        <label htmlFor="five" onClick={() => this.handleClick(1)}><StarIcon /></label>
                        
                        <div className="wrapper">
                            <div className="emoji">
                                <span>😫</span>
                                <span>😕</span>
                                <span>😐</span>
                                <span>😆</span>
                                <span>😍</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Review;