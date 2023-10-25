import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { useRecoilState } from "recoil";
import searchState from "../recoil/SearchState";

export default function SearchBarWithBackground() {
  const [searchQuery, setSearchQuery] = useRecoilState(searchState);

  return (
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
            setSearchQuery(e.target.value);
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
              onClick={() => {
                setSearchQuery(searchQuery);
              }}
              sx={{ mr: 1, color: "gray" }}
            />
          }
        />
      </div>
    </Box>
  );
}
