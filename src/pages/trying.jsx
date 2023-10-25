import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Imagecard from "../components/card";
import { useEffect, useState } from "react";
import axios from "axios";
import ImageModal from "../components/imagemodal";
import Modal from "@mui/material/Modal";

export default function TitlebarBelowMasonryImageList() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.unsplash.com/photos", {
        headers: {
          "Accept-Version": "v1",
          Authorization:
            "Client-ID aT8i0YNqp7jk_vJULvGnLvr2e-gwaYSKwVTSIQSAzCo",
        },
      })
      .then((result) => {
        console.log(result);
        setPhotos(result.data);
      });
  }, []);

  return (
    <center>
      <Box sx={{ width: "90%", height: "100%" }}>
        <ImageList variant="masonry" cols={3} gap={25}>
          {photos.map((item, index) => (
            <ImageListItem key={index}>
              <Imagecard
                imglink={item.urls.small_s3}
                likes={item.likes}
                name={item.user.first_name}
                username={item.user.username}
                profile_image={item.user.profile_image.small}
              ></Imagecard>
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>Hello!</div>
      </Modal>
    </center>
  );
}

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    title: "Bed",
    author: "swabdesign",
  },
  {
    img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
    title: "Books",
    author: "Pavel Nekoranec",
  },
  {
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    title: "Sink",
    author: "Charles Deluvio",
  },
  {
    img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    title: "Kitchen",
    author: "Christian Mackie",
  },
  {
    img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
    title: "Blinds",
    author: "Darren Richardson",
  },
  {
    img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
    title: "Chairs",
    author: "Taylor Simpson",
  },
  {
    img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
    title: "Laptop",
    author: "Ben Kolde",
  },
  {
    img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
    title: "Doors",
    author: "Philipp Berndt",
  },
  {
    img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
    title: "Coffee",
    author: "Jen P.",
  },
  {
    img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
    title: "Storage",
    author: "Douglas Sheppard",
  },
  {
    img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
    title: "Candle",
    author: "Fi Bell",
  },
  {
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
    title: "Coffee table",
    author: "Hutomo Abrianto",
  },
];
