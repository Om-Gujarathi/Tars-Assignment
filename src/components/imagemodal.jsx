import axios from "axios";
import * as React from "react";
import { useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import InstagramIcon from "@mui/icons-material/Instagram";
import Chip from "@mui/joy/Chip";
import Button from "@mui/material/Button";

export default function ImageModal(props) {
  const [photo, setPhoto] = React.useState(null);
  const downloads = photo
    ? new Intl.NumberFormat("en-US", {
        notation: "compact",
        compactDisplay: "short",
      }).format(photo.downloads)
    : 0;

  useEffect(() => {
    axios
      .get(`https://api.unsplash.com/photos/${props.id}`, {
        headers: {
          "Accept-Version": "v1",
          Authorization:
            "Client-ID aT8i0YNqp7jk_vJULvGnLvr2e-gwaYSKwVTSIQSAzCo",
        },
      })
      .then((result) => {
        console.log(result);
        setPhoto(result.data);
      });
  }, []);

  if (!photo) {
    return <div>LOADING...</div>;
  }

  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Card
        sx={{
          borderRadius: "15px",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            image={photo.urls.full}
            alt="green iguana"
            sx={{
              maxHeight: "70vh",
            }}
          />
          <div
            style={{
              marginTop: "-50px",
              display: "flex",
              width: "100%",
              justifyContent: "flex-end",
            }}
          >
            <Button
              color="success"
              variant="contained"
              sx={{ justifySelf: "flex-end", mr: 2 }}
            >
              Download image
            </Button>
          </div>
          <CardContent>
            <Stack
              direction="row"
              spacing={0}
              sx={{ my: 1, alignItems: "center" }}
            >
              <Avatar
                alt="Remy Sharp"
                src={photo.user.profile_image.medium}
                sx={{ width: 64, height: 64 }}
              />
              <div>
                <Typography>{`${photo.user.first_name} ${photo.user.last_name}`}</Typography>
                <Typography>{`@${photo.user.username}`}</Typography>
              </div>

              <InstagramIcon
                sx={{
                  ml: 2,
                }}
              ></InstagramIcon>
              <Typography>{`@${photo.user.instagram_username}`}</Typography>

              <TwitterIcon
                sx={{
                  ml: 2,
                }}
              >
                {" "}
              </TwitterIcon>
              <Typography
                sx={{ flexGrow: 1 }}
              >{`@${photo.user.twitter_username}`}</Typography>
              <div>
                <Typography sx={{ fontWeight: 500, color: "#858484" }}>
                  {downloads} Downloads
                </Typography>
              </div>
            </Stack>
            <Typography sx={{ fontWeight: "500", mt: 3 }}>
              Related Tags
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              useFlexGap
              flexWrap="wrap"
              sx={{ mt: 1 }}
            >
              {photo.tags.map((item, index) => {
                return (
                  <Chip
                    key={index}
                    sx={{
                      borderRadius: "5px",
                      backgroundColor: "#ececec",
                      px: 1,
                      py: 0.5,
                    }}
                  >
                    {item.title}
                  </Chip>
                );
              })}
            </Stack>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
