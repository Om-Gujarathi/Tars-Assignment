import Imagecard from "./components/card";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useEffect, useState } from "react";
import axios from "axios";
import ImageModal from "./components/imagemodal";
import Modal from "@mui/material/Modal";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  const [photos, setPhotos] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [id, setId] = useState("");

  const handleSearch = async () => {
    axios
      .get(`https://api.unsplash.com/search/photos?query=${searchQuery}`, {
        headers: {
          "Accept-Version": "v1",
          Authorization:
            "Client-ID aT8i0YNqp7jk_vJULvGnLvr2e-gwaYSKwVTSIQSAzCo",
        },
      })
      .then((result) => {
        console.log(result);
        setPhotos(result.data.results);
      });
  };

  useEffect(() => {
    axios
      .get("https://api.unsplash.com/photos?per_page=9", {
        headers: {
          "Accept-Version": "v1",
          Authorization:
            "Client-ID aT8i0YNqp7jk_vJULvGnLvr2e-gwaYSKwVTSIQSAzCo",
        },
      })
      .then((result) => {
        console.log("ran!");
        setPhotos(result.data);
      });
  }, []);

  const pages = ["Explore", "Collection", "Community"];

  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          backgroundColor: "white",
          height: "80px",
          pt: 1,
        }}
      >
        <Toolbar>
          <Typography
            variant="h4"
            color={"black"}
            sx={{ ml: "12%", fontWeight: 500 }}
          >
            Image Gallery
          </Typography>
          <InputBase
            placeholder="Search images here"
            value={searchQuery}
            onChange={(e) => {
              console.log(searchQuery);
              setSearchQuery(e.target.value);
              handleSearch();
            }}
            sx={{
              borderRadius: "5px",
              ml: "4%",
              mr: "2%",
              border: "2px solid #f0f0f0",
              width: "25%",
              height: "45px",
              backgroundColor: "#f6f6f6",
            }}
            startAdornment={
              <SearchIcon
                onClick={handleSearch}
                sx={{ mx: 1, color: "gray" }}
              />
            }
          />
          <Box sx={{ flexGrow: 0.75, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: "black", display: "block", mx: 1 }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Typography variant="body1" color={"black"}>
            {" "}
            Dark Mode
          </Typography>
          <Switch></Switch>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          backgroundImage: "url('/background.jpg')",
          height: "385px",
          width: "100%",
          backgroundPosition: `50% 75%`,
          backgroundSize: "cover",
          mb: 8,
        }}
      >
        <div
          style={{
            position: "relative",
            left: "50%",
            top: "50%",
            transform: "translate(-25%, -20%)",
          }}
        >
          <Typography
            variant="h4"
            color={"white"}
            sx={{ fontWeight: 600, my: 1, mx: "5%" }}
          >
            Download High Quality Images by Creators
          </Typography>
          <Typography
            variant="body2"
            color={"white"}
            sx={{ mx: "15%", my: 1, fontWeight: 300 }}
          >
            Over 2.4 million+ stock images by our talented community
          </Typography>
          <InputBase
            placeholder="Search high resolution images, categories, wallpapers"
            value={searchQuery}
            onChange={(e) => {
              console.log(searchQuery);
              setSearchQuery(e.target.value);
              handleSearch();
            }}
            sx={{
              borderRadius: "8px",
              border: "1px solid grey",
              width: "50%",
              color: "black",
              backgroundColor: "white",
              height: "50px",
              pl: 2,
            }}
            startAdornment={
              <SearchIcon
                onClick={handleSearch}
                sx={{ mr: 1, color: "gray" }}
              />
            }
          />
        </div>
      </Box>
      <center>
        <Box sx={{ width: "80%", height: "100%", mb:5}}>
          <ImageList variant="masonry" cols={3} gap={25}>
            {photos.map((item, index) => (
              <ImageListItem
                key={index}
                onClick={() => {
                  setId(item.id);
                  handleOpen();
                }}
              >
                <Imagecard
                  imglink={item.urls.small_s3}
                  likes={item.likes}
                  name={item.user.first_name}
                  username={item.user.username}
                  profile_image={item.user.profile_image.small}
                  surname={item.user.last_name}
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
          sx={{}}
        >
          <ImageModal id={id}></ImageModal>
        </Modal>
      </center>
    </>
  );
}

export default App;
