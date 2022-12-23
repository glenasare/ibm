import { Button } from "@mui/material";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { HomeStyle } from "./Home.style";
import image1 from '../common/images/pexels-luis-quintero-2014775.jpg'
import image2 from '../common/images/pexels-luis-quintero-2294873.jpg'
import image3 from '../common/images/pexels-adrijana-1575859.jpg'

function Home() {
  return (
    <HomeStyle>
      <Carousel>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={image1}
            alt="First slide"
          />
          <Carousel.Caption style={{color:"rgb(255, 255, 255)"}}>
            <h2>What Did Jesus Say</h2>
            <h5>A lot of people say a lot of things about Jesus, but the only wau to really get the thruth is to lsiten to this own words.</h5>
            <Button variant="contained" style={{backgroundColor:'#f8a41e',borderRadius:'20px'}}> Discover Now</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={image2}
            alt="Second slide"
          />

          <Carousel.Caption style={{color:"#e9e5f5"}}>
            <h2>Second slide label</h2>
            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
            <Button variant="contained" style={{backgroundColor:'#f8a41e',borderRadius:'20px'}}> Button</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={image3}
            alt="Third slide"
          />
          <Carousel.Caption style={{color:"#e9e5f5"}}>
            <h2>Third slide label</h2>
            <h5>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </h5>
            <Button variant="contained" style={{backgroundColor:'#f8a41e',borderRadius:'20px'}}> Button</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </HomeStyle>
  );
}

export default Home;
