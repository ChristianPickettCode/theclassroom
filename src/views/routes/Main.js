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
import Profile from "../profile/profile";
import Search from "../search/search";
import Home from "../home/home";

import Bridge from "@esotterik/bridge-library"
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
      <Bridge request={{
        data: ["email", "name"],
        appName: "theClassroom",
        appID: "54321"
        }}>
          <App />
      </Bridge>
    </UserContext.Provider>
  );
};

const App = (props) => {

  return(
    props.user ?  
      <Layout className="main" style={{ position: "absolute" }}>
      {/* {isAuthenticated === false ? <AuthModal /> : ""} */}
        <Room {...props} />
        <Switch>
          <Route exact path="/" children={<Home {...props} />} />
          <Route path="/profile" children={<Profile {...props} />} />
          <Route path="/search" children={<Search  {...props} />} />
          <Route path="/:roomID" children={<Chat {...props} />} />
        </Switch>
        <Switch>
          <Route path="/:roomID/:chatID" children={<Message {...props} />} />
        </Switch>

      </Layout>
    
    : <button onClick={props.login}>login</button>
  
  )
}

export default Main;
