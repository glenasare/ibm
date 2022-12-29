import * as React from "react";

import Card from "@mui/material/Card";
import { youthData } from "./youthData";
import { CardMedia } from "@mui/material";
import { ImageText } from "./youth.style";
import "./youth.style.css"

export default function YouthComponent() {
  return (
    <div
      style={{
        flexDirection: "row",
        display: "flex",
        top: "30%",
        position: "relative",
      }}
    >
      {youthData.map((items: any, index: any) => (
        <Card
          sx={{ maxWidth: 500, width: "100%", maxHeight: "400px" }}
          key={index}
        >
          <ImageText style={{}}>{items.text}</ImageText>
          <CardMedia
            component="img"
            className="card-media"
            style={{
              objectFit: "cover",
              height: "300px",
              
            }}
            height="175"
            image={items.image}
            alt="green iguana"
          />
         
        </Card>
      ))}
    </div>
  );
}
