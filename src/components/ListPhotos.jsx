import Imagecard from "./Imagecard";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useEffect, useState } from "react";
import axios from "axios";
import ImageModal from "./imagemodal";
import Modal from "@mui/material/Modal";
import { useRecoilValue, useSetRecoilState } from "recoil";
import searchState from "../recoil/SearchState";
import selectedPhotoIdState from "../recoil/SelectedPhotoIdState";

export default function ListPhotos() {
  const searchQuery = useRecoilValue(searchState);
  const [photos, setPhotos] = useState([]);
  const setSelectedPhotoId = useSetRecoilState(selectedPhotoIdState);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSearch = async () => {
    axios
      .get(
        `https://api.unsplash.com/search/photos?query=${searchQuery}&per_page=9`,
        {
          headers: {
            "Accept-Version": "v1",
            Authorization:
              "Client-ID aT8i0YNqp7jk_vJULvGnLvr2e-gwaYSKwVTSIQSAzCo",
          },
        }
      )
      .then((result) => {
        console.log(result);
        setPhotos(result.data.results);
      });
  };

  const defaultSearch = async () => {
    axios
      .get("https://api.unsplash.com/photos?per_page=9", {
        headers: {
          "Accept-Version": "v1",
          Authorization:
            "Client-ID aT8i0YNqp7jk_vJULvGnLvr2e-gwaYSKwVTSIQSAzCo",
        },
      })
      .then((result) => {
        console.log("Default search ran!");
        setPhotos(result.data);
      });
  };

  useEffect(() => {
    if (searchQuery.length >= 1) {
      handleSearch();
    } else {
      defaultSearch();
    }
  }, [searchQuery]);

  return (
    <center>
      <Box sx={{ width: "80%", height: "100%", mb: 5 }}>
        <ImageList variant="masonry" cols={3} gap={25}>
          {photos.map((item, index) => (
            <ImageListItem
              key={item.id}
              onClick={() => {
                setSelectedPhotoId(item.id);
                handleOpen();
              }}
            >
              <Imagecard image={item}></Imagecard>
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
      <Modal open={open} onClose={handleClose}>
        <ImageModal></ImageModal>
      </Modal>
    </center>
  );
}
