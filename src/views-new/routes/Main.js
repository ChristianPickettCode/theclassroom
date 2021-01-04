import React, { useEffect, useState } from "react";

import { Layout, Button, Select } from "antd";

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

import Atlis from "atlis";

const { Option } = Select;

const Main = () => {
  return (
      <Atlis request={{
        data: ["email", "name"],
        appName: "theClassroom",
        appID: "6be13202-07fe-4bca-b3b6-d7c43d58c69c"
        }}>
          <App />
      </Atlis>
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
              // console.log("CREATE NEW USER");
              createUser(props.user.userAppID, props.user.email, props.user.name).then(res => {
                // console.log(res);
                setUserData(res.data.createUser);
              }).catch(err => {
                console.log(err);
              })
            } else {
              // console.log("GET USER");
              setUserData(res.data.getUser);
            }
          })
          .catch((err) => console.log(err));

    }
  }, [props.user]);

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
    
    : <div style={{textAlign:"center", padding:"5%"}}> 
          <h2>Welcome to theClassroom an inter and intra school chatroom</h2>
          <h4>University email address required.</h4>
          <Button style={{marginTop:"2%"}} onClick={props.login}>Enter</Button>
          <br />
          <Select defaultValue="default" style={{ width: 100 , marginTop:"20px", position:"absolute", bottom:"20px", right:"20px"}}>
            <Option disabled value="default">Schools</Option>
            <Option value="mcgill">McGill</Option>
            <Option value="uoft">U of T</Option>
            <Option value="ubc">UBC</Option>
          </Select>
      </div>
  
  )
}

export default Main;
