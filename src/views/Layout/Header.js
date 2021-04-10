import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import logo from "../../Assets/Img/logo.png";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "between",
    flexDirection: "row",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        className="navbarTop"
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          width: "100%",
        }}
      >
        <Toolbar style={{ width: "20%" }}>
          <img
            className="logoImg"
            src={logo}
            alt="Italian Trulli"
            style={{ width: "40px", height: "40px" }}
          />
        </Toolbar>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: "5rem",
            width: "35%",
          }}
        >
          <Link className="font-medium" to="#" style={{ paddingRight: "3rem" }}>
            <Typography className="h6" style={{ color: "white" }}>
              Investment
            </Typography>
          </Link>
          <Link className="font-medium" to="#" style={{ paddingRight: "3rem" }}>
            <Typography className="h6" style={{ color: "white" }}>
              Trade
            </Typography>
          </Link>
          <Link className="font-medium" to="#" style={{ paddingRight: "3rem" }}>
            <Typography className="h6" style={{ color: "white" }}>
              History
            </Typography>
          </Link>
          <Link className="font-medium" to="#" style={{ paddingRight: "3rem" }}>
            <Typography className="h6" style={{ color: "white" }}>
              Wallet
            </Typography>
          </Link>
          <Link className="font-medium" to="#" style={{ paddingRight: "3rem" }}>
            <Typography className="h6" style={{ color: "white" }}>
              Support
            </Typography>
          </Link>
        </div>
        <div>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <Typography className="h6" style={{ color: "white" }}>
              Language
            </Typography>

            {/* <AccountCircle /> */}
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Urdo</MenuItem>
            <MenuItem onClick={handleClose}>English</MenuItem>
          </Menu>
        </div>
      </AppBar>
    </div>
  );
}
