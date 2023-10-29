import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routes";
import DefaultLayout from "./layouts/DefaultLayout/DefaultLayout";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { isJsonString } from "./utils";
import jwt_decode from "jwt-decode";
import { resetUser, updateUser } from "./redux/slide/userSlide";
import { useDispatch, useSelector } from "react-redux";
import * as UserService from "./services/UserService";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const { storageData, decoded } = handleDecoded();
    console.log("storageData", storageData, isJsonString(storageData));
    console.log("decoded", decoded);
    if (decoded?.id) {
      handleGetDetailsUser(decoded.id, storageData);
    }
  }, []);

  const handleDecoded = () => {
    let storageData = localStorage.getItem("access_token");
    let decoded = {};
    if (storageData && isJsonString(storageData)) {
      storageData = JSON.parse(storageData);
      decoded = jwt_decode(storageData);
      console.log("decoded", decoded);
    }
    return { decoded, storageData };
  };

  UserService.axiosJWT.interceptors.request.use(
    async (config) => {
      // Do something before request is sent
      const { storageData, decoded } = handleDecoded();
      const currentTime = new Date().getTime() / 1000;
      console.log("storageData", storageData, isJsonString(storageData));
      console.log("decoded", decoded);
      if (decoded?.exp < currentTime) {
        const data = await UserService.refreshToken();
        config.headers["token"] = `Bearer ${data.access_token}`;
      }
      return config;
    },
    (error) => {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  const handleGetDetailsUser = async (id, token) => {
    const res = await UserService.getDetailsUser(id, token);
    console.log("res", res);
    dispatch(updateUser({ ...res.data, token: token }));
  };

  const fetchApi = async () => {
    const res = await axios.get(`http://localhost:5000/api/product/get-all`);
    return res.data;
  };

  const query = useQuery({ queryKey: ["todos"], queryFn: fetchApi });

  console.log("query", query);
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;

            let Layout = DefaultLayout;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
};

export default App;