import React, { useEffect, useState } from "react";

import { Layout, Button } from "antd";

import { Switch, Route } from "react-router-dom";

import "./Main.css";

import { API, graphqlOperation } from "aws-amplify";
import * as queries from "../../graphql/queries";
import * as mutations from '../../graphql/mutations';

import Room from "../room/sidebar";
import Chat from "../chat/sidebar";
import Message from "../message/messages";
import Profile from "../profile/profile";
import Search from "../search/search";
import Home from "../home/home";

import Bridge from "@esotterik/bridge-library"
const Main = () => {
  return (
      <Bridge request={{
        data: ["email", "name"],
        appName: "theClassroom",
        appID: "54321"
        }}>
          <App />
      </Bridge>
  );
};

const App = (props) => {

  const [userData, setUserData] = useState(null);

  const getUser = async (id) => {
    return await API.graphql(graphqlOperation(queries.getUser, { id }));
  };

  const createUser = async (id, email, name) => {
    return await API.graphql(
      graphqlOperation(mutations.createUser, {
        input: {
          id,
          email,
          firstName: name
        },
      })
    );
  };

  useEffect(() => {
    
    if (props.user) {
      // console.log(props.user);
      getUser(props.user.userAppID)
          .then((res) => {
            // console.log(res.data.getUser);
            if (res.data.getUser === null) {
              console.log("CREATE NEW USER");
              createUser(props.user.userAppID, props.user.email, props.user.name).then(res => {
                // console.log(res);
                setUserData(res.data.createUser);
              }).catch(err => {
                console.log(err);
              })
            } else {
              console.log("GET USER");
              setUserData(res.data.getUser);
            }
          })
          .catch((err) => console.log(err));

    }
  }, [props.user])

  return(
    props.user && userData ?  
      <Layout className="main" style={{ position: "absolute" }}>
      {/* {isAuthenticated === false ? <AuthModal /> : ""} */}
        <Room {...props} userData={userData} />
        <Switch>
          <Route exact path="/" children={<Home {...props} userData={userData} />} />
          <Route path="/profile" children={<Profile {...props} userData={userData} />} />
          <Route path="/search" children={<Search  {...props} userData={userData} />} />
          <Route path="/:roomID" children={<Chat {...props} userData={userData} />} />
        </Switch>
        <Switch>
          <Route path="/:roomID/:chatID" children={<Message {...props} userData={userData} />} />
        </Switch>

      </Layout>
    
    : <div style={{textAlign:"center"}}> 
          <Button style={{marginTop:"10%"}} onClick={props.login}>login</Button>
      </div>
  
  )
}

export default Main;
