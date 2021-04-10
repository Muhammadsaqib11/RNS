import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import { darken } from "@material-ui/core/styles/colorManipulator";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import RegisterTab from "./RegisterTab";
import logo from "../Assets/Img/logo.png";
const useStyles = makeStyles((theme) => ({
  root: {
    background: `linear-gradient(to left, ${
      theme.palette.primary.dark
    } 0%, ${darken(theme.palette.primary.dark, 0.5)} 100%)`,
    color: theme.palette.primary.contrastText,
  },
  leftSection: {},
  rightSection: {
    background: `linear-gradient(to left, ${
      theme.palette.primary.dark
    } 0%, ${darken(theme.palette.primary.dark, 0.5)} 100%)`,
    color: theme.palette.primary.contrastText,
  },
}));

function Register() {
  const classes = useStyles();
  const [selectedTab, setSelectedTab] = useState(0);

  function handleTabChange(event, value) {
    setSelectedTab(value);
  }

  return (
    <div className="d-flex flex-row h-100">
      <div className="col-lg-6 registerBlock1 d-flex w-100 justify-content-center align-items-center flex-column">
        <div className="">
          <h3>Welcome To</h3>
          <img className="logoImg" src={logo} alt="Italian Trulli" />
          <h5 className="pt-1">Registeration</h5>
        </div>
      </div>
      <div className="col-lg-6 p-0">
        <RegisterTab />
      </div>
    </div>
  );
}

export default Register;
