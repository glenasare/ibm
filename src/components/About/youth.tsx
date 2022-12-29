import * as React from "react";

import Card from "@mui/material/Card";
import { youthData } from "./youthData";
import { CardMedia } from "@mui/material";



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
        <Card sx={{ maxWidth: 500,width:"100%" }}>
          <CardMedia
            component="img"
            height="170"
            image={items.image}
            alt="green iguana"
          />
        </Card>
      ))}
    </div>
  );
}
