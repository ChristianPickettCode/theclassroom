import React, { useEffect, useState, useContext } from "react";

import {
  Layout,
  Input,
  Comment,
  List,
  Skeleton,
  Avatar,
  Button,
  Row,
  Popover,
} from "antd";
import moment from "moment";

import { useParams, Link } from "react-router-dom";

import { Auth, API, graphqlOperation } from "aws-amplify";
import * as mutations from "../../graphql/mutations";
import * as queries from "../../graphql/queries";
import * as subscriptions from "../../graphql/subscriptions";

import UserContext from "../../components/UserContext";

const { Content } = Layout;
const { TextArea } = Input;

const Messages = () => {
  let { roomID, chatID } = useParams();
  const [chat, setChat] = useState();
  const [messages, setMessages] = useState([]);
  const [messageText, setMessageText] = useState("");

  const user = useContext(UserContext);

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
        console.log(res);
        setChat(res.data.getChat);
        // setMessages(res.data.getChat.messages.items);
      })
      .catch((err) => {
        console.log(err);
      });

    getMessages()
      .then((res) => {
        console.log("MESSAGES", res);
        setMessages(res.data.messageByDate.items);
      })
      .catch((err) => {
        console.log("ERROR", err);
      });
  }, [chatID]);

  useEffect(() => {
    const subscription = API.graphql(
      graphqlOperation(subscriptions.onCreateMessage)
    ).subscribe({
      next: (event) => {
        console.log(event);
        setMessages([...messages, event.value.data.onCreateMessage]);
      },
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [messages]);

  const sendMessage = async (text) => {
    console.log(user.id, chatID, text);
    return await API.graphql(
      graphqlOperation(mutations.createMessage, {
        input: {
          text,
          messageUserId: user.id,
          messageChatId: chatID,
          chatID,
          type: "Message",
          createdAt: new Date(),
        },
      })
    );
  };

  const createMessage = () => {
    const data = messageText;

    sendMessage(data)
      .then((res) => {
        console.log(res);
        setMessageText("");
      })
      .catch((err) => console.log(err));
  };

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
                author={item.user.email}
                avatar={
                  <Avatar>{item.user.email.charAt(0).toUpperCase()}</Avatar>
                }
                content={item.text}
                datetime={moment(new Date(item.createdAt)).fromNow()}
              />
            );
          }}
        />
        <Input
          style={{ marginTop: "auto", borderColor: "#40a9ff" }}
          onChange={(e) => setMessageText(e.target.value)}
          value={messageText}
          onPressEnter={() => createMessage()}
        />
      </Content>
    </Layout>
  );
};

export default Messages;
