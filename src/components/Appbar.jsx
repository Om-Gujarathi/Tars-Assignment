import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useRecoilState } from "recoil";
import searchState from "../recoil/SearchState";

export default function Appbar() {
  const pages = ["Explore", "Collection", "Community"];
  const [searchQuery, setSearchQuery] = useRecoilState(searchState);

  return (
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
            console.log(e.target.value);
            setSearchQuery(e.target.value);
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
            <SearchIcon onClick={() => {
              setSearchQuery(searchQuery);
            }} sx={{ mx: 1, color: "gray" }} />
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
      </Toolbar>
    </AppBar>
  );
}
