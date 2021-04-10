import Button from "@material-ui/core/Button";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import CustomTextField from "../components/CustomTextField";
import CustomButton from "../components/CustomButton";
import { createNotification } from "../components/Toast";
import api from "../apiCalls/api";
function ClientRegisteration(props) {
  const dispatch = useDispatch();
  const [detail, setDetail] = useState();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmpassword] = useState();
  const [ip, setIp] = useState();
  const [device, setDevice] = useState("Pavilion");
  const [location, setLocation] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  // const register = useSelector(({ auth }) => auth.register);

  const [isFormValid, setIsFormValid] = useState(false);

  // useEffect(() => {
  // 	if (register.error && (register.error.username || register.error.password || register.error.email)) {
  // 		formRef.current.updateInputsWithError({
  // 			...register.error
  // 		});
  // 		disableButton();
  // 	}
  // }, [register.error]);

  function disableButton() {
    setIsFormValid(false);
  }

  function enableButton() {
    setIsFormValid(true);
  }

  function handleSubmit() {
    // dispatch(submitRegister(model));
  }

  useEffect(() => {
    // get User Location and IP
    axios
      .get(
        "https://geolocation-db.com/json/afa4d000-8eb9-11eb-a6ff-2538b793e762/37.111.134.212"
      )
      .then(function (response) {
        // handle success
        // console.log("resoonse", response);
        //   setDevice()
        setIp(response.data.IPv4);
        setLocation(response.data.country_name);
        setDetail(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);
  useEffect(() => {
    console.log("location", location);
  }, [location, ip, detail]);
  const authenticate = (e) => {
    console.log("auth");
    e.preventDefault();

    setLoading(true);

    api
      .register({
        email,
        password,
        confirmPassword,
        ip,
        location,
        name,
        device,
      })
      .then((res) => {
        if (res.data.status === "error") {
          createNotification("error", res.data.message, "Status");
        } else {
          console.log("response", res);
          //   dispatch(setAuthInfo(res.data));
          //   createNotification("success", "Login Successfully");
        }
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };
  return (
    <div className="w-full">
      <form autoComplete={false} onSubmit={authenticate}>
        <CustomTextField
          title={"Name"}
          value={name}
          // autoComplete={false}
          type="text"
          // error={(name.length > 1 && name.length <= 3) || error}
          message={"Please enter valid name"}
          onChange={(e) => {
            setName(e.target.value);
            //   setError(false);
          }}
        />
        <CustomTextField
          title={"Email"}
          value={email}
          // autoComplete={false}
          type="email"
          // error={(email.length > 1 && email.length <= 3) || error}
          message={"Please enter valid email"}
          onChange={(e) => {
            setEmail(e.target.value);
            //   setError(false);
          }}
        />
        <CustomTextField
          password={password}
          // error={(password.length > 1 && password.length <= 3) || error}
          message={"Please enter valid password"}
          title={"Password"}
          type={"password"}
          // autoComplete={false}
          onChange={(e) => {
            setPassword(e.target.value);
            //   setError(false);
          }}
        />
        <CustomTextField
          password={confirmPassword}
          // error={password !== confirmPassword || error}
          message={"Password doesent Match"}
          title={"Confirm Password"}
          type={"password"}
          // autoComplete={false}
          onChange={(e) => {
            setConfirmpassword(e.target.value);
            //   setError(false);
          }}
        />
        <CustomButton
          title={"Login"}
          type="submit"
          loading={loading}
          disabled={loading}
        />
      </form>
    </div>
  );
}

export default ClientRegisteration;
