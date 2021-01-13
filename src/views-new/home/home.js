import React, { useState, useEffect } from "react";
import { Layout, Card, Col, Row, message } from "antd";
import moment from "moment";
import { Link } from "react-router-dom";

import {
  StarOutlined,
  CodeOutlined,
//   UserAddOutlined,
  EyeOutlined,
} from "@ant-design/icons";

import { API, graphqlOperation } from "aws-amplify";
import * as queries from "../../graphql/queries";
import * as mutations from "../../graphql/mutations";

const { Content } = Layout;
const { Meta } = Card;

const Home = (props) => {

    const [rooms, setRooms] = useState([]);

    // const [user, setUser] = useState(null);

    const getRooms = async () => {
        return await API.graphql(graphqlOperation(queries.listRooms));
    };

    useEffect(() => {
        getRooms()
        .then((res) => {
            // console.log(res);
            setRooms(res.data.listRooms.items);
        })
        .catch((err) => console.log(err));
    }, []);

    const updateUser = async (userID, joinedRooms) => {
      return await API.graphql(graphqlOperation(mutations.updateUser, { input : { id : userID, joinedRooms } }));
    }

    const addToJoinedRooms = (id) => {
      
      let updatedJoinedRooms = [];
      if (props.userData.joinedRooms) {
        updatedJoinedRooms = [id, ...props.userData.joinedRooms];
      } else {
        updatedJoinedRooms = [id];
      }

      if (props.userData.joinedRooms && !props.userData.joinedRooms.includes(id)) {
        updateUser(props.userData.id, updatedJoinedRooms)
          .then(res => {
            console.log(res);
            props.setUserData(res.data.updateUser);
            // window.location = "/";
            message.success("Added room to favorites...refresh to see on sidebar");
          })
          .catch(err => {
            console.log(err)
          })
      } else if (!props.userData.joinedRooms) {
        updateUser(props.userData.id, updatedJoinedRooms)
          .then(res => {
            console.log(res);
            props.setUserData(res.data.updateUser);
            // window.location = "/";
            message.success("Added room to favorites...refresh to see on sidebar");
          })
          .catch(err => {
            console.log(err)
          })
      } else {
        updatedJoinedRooms = updatedJoinedRooms.filter(i => i !== id);
        updateUser(props.userData.id, updatedJoinedRooms)
          .then(res => {
            console.log(res);
            props.setUserData(res.data.updateUser);
            // window.location = "/";
            message.success("Removed room from favorites...refresh to see on sidebar");
          })
          .catch(err => {
            console.log(err)
          })
      }

      
      
    }

  return (
    <Layout>
      <Content
        style={{
          margin: "24px 16px",
          padding: 24,
          minHeight: 280,
        }}
      >
        <h3>"Welcome {props.user.name}"</h3>
        
        <Row gutter={[16, 16]}>

        {rooms.map((room) => (

            <Col span={8} key={room.id}>
                <Card
                size="small"
                bordered={false}
                actions={[
                    // <UserAddOutlined key="setting" />,
                    <Link to={`/${room.id}`}><EyeOutlined key="edit" /></Link>,
                    <StarOutlined key="star" onClick={() => addToJoinedRooms(room.id)}/>,
                ]}
                >
                <Meta
                    avatar={<CodeOutlined style={{ fontSize: "24px" }} />}
                    title={room.name}
                    description={
                    <div>
                        <p style={{ marginBottom: "0" }}>{room.group}</p>
                        <p style={{ marginBottom: "0" }}>Created { moment(new Date(room.createdAt)).fromNow() }</p>
                    </div>
                    }
                />
                </Card>
            </Col>
        ))}
          
          
        </Row>
      </Content>
    </Layout>
  );
};

export default Home;
