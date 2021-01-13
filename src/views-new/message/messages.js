import React, { useEffect, useState } from "react";

import { Layout, Input, Comment, List, Avatar, message , Row, Col, Dropdown, Menu, Button} from "antd";
import moment from "moment";

import { useParams } from "react-router-dom";

import {
  SendOutlined,
  SmallDashOutlined,
  SettingOutlined
} from '@ant-design/icons';

import { API, graphqlOperation } from "aws-amplify";
import * as mutations from "../../graphql/mutations";
import * as queries from "../../graphql/queries";
import * as subscriptions from "../../graphql/subscriptions";

const { Content } = Layout;

const { Search } = Input;

const Messages = (props) => {
  let { chatID } = useParams();
  const [chat, setChat] = useState();
  const [messages, setMessages] = useState([]);
  const [messageText, setMessageText] = useState("");

  const getChat = async (id) => {
    return await API.graphql(
      graphqlOperation(queries.getChat, {
        id,
        messages: {
          items: {
            sortDirection: "ASC",
          },
        },
      })
    );
  };

  const listMessages = `query messageByDate {
    messageByDate(filter: {chatID: {eq: "${chatID}"}}, sortDirection: ASC, type: "Message") {
      items {
        chatID
        createdAt
        id
        text
        type
        updatedAt
        user {
          createdAt
          admin
          email
          firstName
          id
          lastActive
          lastName
          school
          updatedAt
        }
      }
    }
  }`;

  const getMessages = async () => {
    return await API.graphql(graphqlOperation(listMessages));
  };

  useEffect(() => {
    getChat(chatID)
      .then((res) => {
        // console.log(res);
        setChat(res.data.getChat);
        // setMessages(res.data.getChat.messages.items);
      })
      .catch((err) => {
        console.log(err);
      });

    getMessages()
      .then((res) => {
        // console.log("MESSAGES", res);
        setMessages(res.data.messageByDate.items);
      })
      .catch((err) => {
        console.log("ERROR", err);
      });
  }, [chatID]);

  useEffect(() => {
    const subscription = API.graphql(
      graphqlOperation(subscriptions.sendMessage, { chatID })
    ).subscribe({
      next: (event) => {
        setMessages([...messages, event.value.data.sendMessage]);
      },
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [messages]);

  const sendMessage = async (text) => {
    // console.log(props.userData.id, chatID, text);
    return await API.graphql(
      graphqlOperation(mutations.createMessage, {
        input: {
          text,
          messageUserId: props.userData.id,
          messageChatId: chatID,
          chatID,
          type: "Message",
          createdAt: new Date(),
        },
      })
    );
  };

  const createMessage = (val) => {
    // const data = messageText;
    const data = val;

    sendMessage(data)
      .then((res) => {
        // console.log(res);
        setMessageText("");
      })
      .catch((err) => console.log(err));
  };


  const deleteMsg = async(item) => {
    await API
      .graphql(graphqlOperation(mutations.deleteMessage, {input : {id: item.id}}))
      .then(res => {
        setMessages( prev => prev.filter(i => i.id !== res.data.deleteMessage.id));
      })
      .catch(err => {
        console.log(err);
        message.error("Could not delete message");
      })
  }

  return (
    <Layout className="site-layout">
      <Content
        className="site-layout-background"
        style={{
          padding: "24px 24px 24px 24px",
          minHeight: 280,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* <Row justify="end" style={{ backgroundColor: "transparent" }}>
          <Popover content={"hello"} title="Info" trigger="hover">
            <Button style={{ width: "100px" }}>Students</Button>
          </Popover>
        </Row> */}

        {/* { chat && chat.room.admin.id === props.user.userAppID ? 
        <Dropdown overlay={
          <Menu>
              <Menu.Item>
                <span style={{color:"red"}} onClick={() => console.log("item")}>Delete</span>
              </Menu.Item>
          </Menu>
        }>
          <SettingOutlined style={{position: "absolute", right:"40px", top:"15px", fontSize:"16px"}} onClick={() => console.log("working")} />
        </Dropdown>
        
        : ""} */}
        
        

        <List
          className="comment-list"
          itemLayout="horizontal"
          dataSource={messages}
          style={{
            overflow: "scroll",
            scrollbarColor: "green",
            display: "flex",
            flexDirection: "column-reverse",
            marginBottom: "20px",
          }}
          renderItem={(item) => {
            return (
              <Comment
                author={item.user.school ? `${item.user.school} / ${item.user.firstName}` : `New / ${item.user.firstName}`}
                // avatar={
                //   <Avatar>{item.user.firstName.charAt(0).toUpperCase()}</Avatar>
                // }
                content={
                  <div>
                    <Row justify="space-between">
                      <Col span="23">
                      {item.text}
                      </Col>
                      {/* {item.user.id === props.user.userAppID ? 
                        <Col span="1">
                          <Dropdown overlay={
                            <Menu>
                              
                                <Menu.Item>
                                  <span style={{color:"red"}} onClick={() => deleteMsg(item)}>Delete</span>
                                </Menu.Item>
                            </Menu>
                          }>
                            <SmallDashOutlined  />
                          </Dropdown>
                        </Col>
                      : "" } */}
                    </Row>
                  </div>
                }
                datetime={moment(new Date(item.createdAt)).fromNow()}
                // actions={ item.user.id === props.user.userAppID ? [<span style={{color:"red"}} onClick={() => deleteMsg(item)}>Delete</span>] : [] }
              />
            );
          }}
        />
        {/* <Input
          style={{ marginTop: "auto", borderColor: "#40a9ff" }}
          onChange={(e) => setMessageText(e.target.value)}
          value={messageText}
          onPressEnter={() => createMessage()}
        /> */}
        <Search 
          style={{ marginTop: "auto", borderColor: "#40a9ff" }} 
          enterButton={<SendOutlined />}
          onChange={(e) => setMessageText(e.target.value)}
          value={messageText}
          onSearch={createMessage}
          />
      </Content>
    </Layout>
  );
};

export default Messages;
