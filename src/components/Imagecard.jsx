import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Avatar } from "@mui/material";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import Box from "@mui/material/Box";

export default function Imagecard({image}) {
  return (
    <Card
      sx={{
        borderRadius: "10px",
      }}
      variant="outlined"
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image={image.urls.small_s3}
          alt={image.user.first_name}
          srcSet={`${image.urls.small_s3}?w=162&auto=format&dpr=2 2x`}
          src={`${image.urls.small_s3}?w=162&auto=format`}
        />
        <CardContent>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
            }}
          >
            <Avatar
              alt={image.user.first_name}
              src={image.user.profile_image.small}
              sx={{}}
            />
            <div
              style={{
                flexGrow: 1,
              }}
            >
              <Typography
                variant="body1"
                textAlign={"left"}
                sx={{ color: "#676767", fontWeight: "500" }}
              >
                {image.user.first_name} {image.user.lastname}
              </Typography>
              <Typography
                variant="body2"
                textAlign={"left"}
                sx={{ color: "#bebebe", fontWeight: "500" }}
              >{`@${image.user.username}`}</Typography>
            </div>
            <ThumbUpOutlinedIcon
              sx={{ color: "#6a6a6a" }}
            ></ThumbUpOutlinedIcon>
            <Typography sx={{ color: "#6a6a6a", fontWeight: "600", ml: -1 }}>
              {image.likes}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
