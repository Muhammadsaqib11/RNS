import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import CustomTextField from "../components/CustomTextField";
import CustomButton from "../components/CustomButton";
import { setAuthInfo } from "../Action/Auth";
import { createNotification } from "../components/Toast";
import api from "../apiCalls/api";
import { useDispatch, useSelector } from "react-redux";
import DarkMode from "../components/DarkMode";
import logo from "../Assets/Img/logo.png";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 500,
  },
});

export default function Login(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { userToken, isAuthenticated } = useSelector((state) => state.Auth);
  // useEffect(() => {
  //   if (userToken && isAuthenticated) {
  //     history.push('/');
  //   }
  //   return () => {
  //     console.log('USER IS ALREADY LOGGED IN');
  //   };
  //   // eslint-disable-next-line
  // }, [isAuthenticated]);

  const authenticate = (e) => {
    e.preventDefault();
    console.log("auth");

    setLoading(true);
    api
      .login({ email, password })
      .then((res) => {
        if (res.data.status === "error") {
          createNotification("error", res.data.message, "Status");
        } else {
          console.log("response");

          // dispatch(setAuthInfo(res.data));
          createNotification("success", "Login Successfully");
          props.history.push("/");
        }
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        // createNotification(
        //   'error',
        //   err.data?.message ?? 'Something went wrong please try again later'
        // );
      });
  };
  return (
    <>
      <div className="container col-sm-12 d-flex justify-content-center align-items-center h-100vh">
        <div className="col-sm-4 shadow loginBlock2 ptb-2">
          <div className="plr-3">
            <div className="d-flex w-100 justify-content-center align-items-center flex-column">
              <h3>Welcome To</h3>
              <img className="logoImg" src={logo} alt="Italian Trulli" />
            </div>

            <form autoComplete={false} onSubmit={authenticate}>
              <fieldset>
                <CustomTextField
                  title={"Email"}
                  value={email}
                  autoComplete={false}
                  type="email"
                  error={(email.length > 1 && email.length <= 3) || error}
                  message={"Please enter valid email"}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError(false);
                  }}
                />
                <CustomTextField
                  password={password}
                  error={(password.length > 1 && password.length <= 3) || error}
                  message={"Please enter valid password"}
                  title={"Password"}
                  type={"password"}
                  autoComplete={false}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError(false);
                  }}
                />
                <CustomButton
                  title={"Login"}
                  type="submit"
                  loading={loading}
                  disabled={loading}
                />
              </fieldset>
            </form>
          </div>
          <div className="d-flex  justify-items-center justify-content-center ">
            <span className="font-medium">Don't have an account?</span>
            <Link className="font-medium" to="/register">
              Create an account
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
