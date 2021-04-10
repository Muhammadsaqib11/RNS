import Typography from "@material-ui/core/Typography";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Icon from "@material-ui/core/Icon";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
// import Tracking from "./Tracking/Tracking";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { DataGrid } from "@material-ui/data-grid";
import Avatar from "@material-ui/core/Avatar";
import { deepOrange, deepPurple } from "@material-ui/core/colors";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import FindInPageIcon from "@material-ui/icons/FindInPage";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import Header from "./Layout/Header";
import PaiChart from "./PaiChart";
import FacebookIcon from "@material-ui/icons/Facebook";
import DeviceRecordTable from "./DeviceRecordTable";
const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 150 },
  { field: "lastName", headerName: "Last name", width: 150 },
  { field: "age", headerName: "Age", type: "number", width: 100 },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 200,
    valueGetter: (params) =>
      `${params.getValue("firstName") || ""} ${
        params.getValue("lastName") || ""
      }`,
  },
  { field: "Action", headerName: "Action", width: 100 },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  accordionContent: {
    width: "100%",
  },
  stacksMain: {
    width: "98%",
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));

function Dashboard() {
  const classes = useStyles();

  const dispatch = useDispatch();

  // useEffect(() => {
  // 	dispatch(getWidgets());
  // 	// console.log("Dispatch", dispatch)
  // }, [dispatch]);

  return (
    <div
      className="w-full"
      style={{ backgroundColor: "lightgray", height: "100vh" }}
    >
      <Header />

      <div
        style={{
          width: "100%",
          display: "flex",
          marginTop: "10px",
          margin: "20px",
        }}
      >
        <div
          style={{
            width: "55%",
            height: "300vh",
            minHeight: "35vh",
            marginRight: "10px",
          }}
        >
          <Card className="w-98">
            <CardContent
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Typography className="h2" color="textPrimary">
                Dashboard
              </Typography>

              <button
                style={{
                  backgroundColor: "transparent",
                  padding: "10px",
                  border: "1px lightgray",
                  borderRadius: "10px",
                }}
              >
                <Typography className="h2" color="textPrimary">
                  Submit Varification Documents ?
                </Typography>
              </button>
            </CardContent>
          </Card>
          <Card className="w-98 mt-2">
            <CardContent>
              <PaiChart />
            </CardContent>
          </Card>
          <Card className="w-98 mt-2">
            <CardContent>
              <Typography className="h2" color="textPrimary">
                Device Management
              </Typography>
            </CardContent>
          </Card>
          <Card className="w-98 mt-2">
            <DeviceRecordTable />
          </Card>
        </div>
        <div style={{ width: "40%", height: "50vh" }}>
          <Card className="w-98 mt-2">
            <CardContent
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <FacebookIcon style={{ height: "50px", width: "50px" }} />
              <Typography className="h2 pt-2" color="textPrimary">
                Google Authentication
              </Typography>
              <button type="button" class="btn btn-warning">
                Enable
              </button>
            </CardContent>
          </Card>
          <Card className="w-98 mt-2">
            <CardContent
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <FacebookIcon style={{ height: "50px", width: "50px" }} />
              <Typography className="h2 pt-2" color="textPrimary">
                SMS Authentication
              </Typography>
              <button type="button" class="btn btn-warning">
                Enable
              </button>
            </CardContent>
          </Card>
          <Card className="w-98 mt-2">
            <CardContent
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <FacebookIcon style={{ height: "50px", width: "50px" }} />
              <Typography className="h2 pt-2" color="textPrimary">
                Anti Phishing Phase
              </Typography>
              <button type="button" class="btn btn-warning">
                Enable
              </button>
            </CardContent>
          </Card>
          <Card className="w-98 mt-2">
            <CardContent
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <FacebookIcon style={{ height: "50px", width: "50px" }} />
              <Typography className="h2 pt-2" color="textPrimary">
                Google Authentication
              </Typography>
              <button type="button" class="btn btn-warning">
                Enable
              </button>
            </CardContent>
          </Card>
          <Card className="w-98 mt-2">
            <CardContent
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <FacebookIcon style={{ height: "50px", width: "50px" }} />
              <Typography className="h2 pt-2" color="textPrimary">
                Google Authentication
              </Typography>
              <button type="button" class="btn btn-warning">
                Enable
              </button>
            </CardContent>
          </Card>
          <Card className="w-98 mt-2">
            <CardContent>
              <Typography className="h2" color="textPrimary">
                Login Record
              </Typography>
            </CardContent>
          </Card>
          <Card className="w-98 mt-2">
            <DeviceRecordTable />
          </Card>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Dashboard);
