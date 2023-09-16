import * as React from "react"
import { styled, alpha } from "@mui/material/styles"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import InputBase from "@mui/material/InputBase"
import SearchIcon from "@mui/icons-material/Search"
import Button from "@mui/material/Button"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import EditIcon from "@mui/icons-material/Edit"
import Divider from "@mui/material/Divider"
import ArchiveIcon from "@mui/icons-material/Archive"
import FileCopyIcon from "@mui/icons-material/FileCopy"
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import IconButton from "@mui/material/IconButton"
// import MenuIcon from "@mui/icons-material/Menu"
import Typography from "@mui/material/Typography"
// import Stack from "@mui/material/Stack"
import Image from "next/image"
import GernresList from "./GenresList"
import { MoviesList } from "./MoviesList"

// search component
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}))

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}))

export default function Navbar({ movieGernresList }) {
  return (
    <Box>
      <AppBar
        position="static"
        sx={{
          background: "black",
          display: "flex",
          alignItems: "space-between",
        }}
      >
        <Toolbar>
          <div>
            <Image
              src="/../../logo.svg"
              layout="responsive"
              width={100}
              height={100}
              alt="NeoCine Logo"
            />
          </div>
          <div style={{ display: "flex", flex: "1", justifyContent: "center" }}>
            <HomeBtn />

            <GernresList movieGernresList={movieGernresList} />

            <MoviesList />

            <ActorsBtn />
          </div>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}))

export function ActorsBtn() {
  return (
    <div>
      <Button
        variant="contained"
        disableElevation
        sx={{
          background: "black",
          "&:hover": {
            backgroundColor: "#F5C518",
            color: "white",
          },
        }}
      >
        Actors
      </Button>
    </div>
  )
}
export function HomeBtn() {
  return (
    <div>
      <Button
        variant="contained"
        disableElevation
        sx={{
          background: "black",
          "&:hover": {
            backgroundColor: "#F5C518",
            color: "white",
          },
        }}
      >
        Home
      </Button>
    </div>
  )
}
