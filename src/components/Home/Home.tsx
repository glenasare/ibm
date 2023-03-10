import { Button } from "@mui/material";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { HomeStyle } from "./Home.style";

import "./Home.css";
import { ImageData } from "./imageData";

function Home() {
  return (
    <HomeStyle>
      <Carousel>
        {ImageData.map((items: any, index: any) => (
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src={items.image}
              alt="First slide"
              style={{ height: "100vh", filter: "brightness(50%)",objectFit:'cover' }}
            />
            <Carousel.Caption style={{ color: "#e9e5f5" }}>
              <h2>What Did Jesus Say</h2>
              <h5>
                A lot of people say a lot of things about Jesus, but the only
                wau to really get the thruth is to lsiten to this own words.
              </h5>
              <Button
                variant="contained"
                style={{ backgroundColor: "#f8a41e", borderRadius: "20px" }}
              >
                {" "}
                Discover Now
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </HomeStyle>
  );
}

export default Home;
