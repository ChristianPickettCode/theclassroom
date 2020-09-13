import React, { useEffect, useState } from "react";

import { Layout } from "antd";

import { Auth, API, graphqlOperation } from "aws-amplify";
import * as queries from "../../graphql/queries";

import UserContext from "../../components/UserContext";

import { Switch, Route } from "react-router-dom";

import "./Main.css";

import Room from "../room/sidebar";
import Chat from "../chat/sidebar";
import Message from "../message/messages";
import AuthModal from "../auth/modal";

const Main = () => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  const getUser = async (id) => {
    return await API.graphql(graphqlOperation(queries.getUser, { id }));
  };

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((user) => {
        console.log("USER: ", user);
        setIsAuthenticated(true);
        getUser(user.attributes.sub)
          .then((res) => {
            console.log(res.data.getUser);
            setUser(res.data.getUser);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        console.log("Error : ", err);
        setIsAuthenticated(false);
      });
  }, []);
  return (
    <UserContext.Provider value={user}>
      <Layout className="main" style={{ position: "absolute" }}>
        {isAuthenticated === false ? <AuthModal /> : ""}
        <Room />
        <Switch>
          <Route path="/:roomID" children={<Chat />} />
        </Switch>
        <Switch>
          <Route path="/:roomID/:chatID" children={<Message />} />
        </Switch>
      </Layout>
    </UserContext.Provider>
  );
};

export default Main;
