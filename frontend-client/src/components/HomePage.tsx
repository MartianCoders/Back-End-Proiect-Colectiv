import React from 'react';
import NavBar from './NavBar';
import HomeContent from './HomeContent';
import './HomePage.css';
import VideoComments from './VideoComments';

class HomePage extends React.Component<any,any> {
  render() {
    return (
      <div className="homePage">
          <div className="svg-container">
              <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 600" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient" x1="6%" y1="27%" x2="94%" y2="73%"><stop offset="5%" stop-color="#80aaffff"></stop><stop offset="95%" stop-color="#ffe6ffff"></stop></linearGradient></defs><path d="M 0,600 C 0,600 0,300 0,300 C 154.46428571428572,291.7857142857143 308.92857142857144,283.57142857142856 426,308 C 543.0714285714286,332.42857142857144 622.75,389.50000000000006 741,385 C 859.25,380.49999999999994 1016.0714285714287,314.42857142857144 1139,290 C 1261.9285714285713,265.57142857142856 1350.9642857142858,282.7857142857143 1440,300 C 1440,300 1440,600 1440,600 Z" stroke="none" stroke-width="0" fill="url(#gradient)" className="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 300)"></path></svg>
          </div>
          <div className="main">
              <NavBar navigate={this.props.navigate} parent="home"/>
              <HomeContent navigate={this.props.navigate}/>
          </div>
      </div>
      
    );
  }
  
}

export default HomePage;