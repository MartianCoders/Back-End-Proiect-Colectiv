import React, { Component } from 'react'
import './HomePageHeader.css';
import { Carousel } from 'react-bootstrap'
import img1 from '../images/img1CarouselHome.gif'
import img2 from '../images/img2CarouselHome.png'
import img3 from '../images/img3CarouselHome.jpeg'

export default class HomePageHeader extends Component<any,any> {
    render() {
        return (
            <div>
             <Carousel>
                <Carousel.Item>
                    <img
                    className="img-fluid"
                    src={img1}       
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="img-fluid"
                    src={img2}                    
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="img-fluid"
                    src={img3}                    
                    />
                </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}
