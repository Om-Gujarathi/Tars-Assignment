import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { CardActionArea, Avatar } from "@mui/material";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";

import clsx from "clsx";
import { Modal as BaseModal } from "@mui/base/Modal";

export default function Imagecard(props) {
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
          image={props.imglink}
          alt="green iguana"
          srcSet={`${props.imglink}?w=162&auto=format&dpr=2 2x`}
          src={`${props.imglink}?w=162&auto=format`}
        />
        <CardContent>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
            }}
          >
            <Avatar alt={props.name} src={props.profile_image} sx={{}} />
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
                {props.name} {props.surname}
              </Typography>
              <Typography
                variant="body2"
                textAlign={"left"}
                sx={{ color: "#bebebe", fontWeight: "500" }}
              >{`@${props.username}`}</Typography>
            </div>
            <ThumbUpOutlinedIcon
              sx={{ color: "#6a6a6a" }}
            ></ThumbUpOutlinedIcon>
            <Typography sx={{ color: "#6a6a6a", fontWeight: "600", ml: -1 }}>
              {props.likes}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
