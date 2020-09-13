import React, { useState, useEffect } from "react";

import { Layout, Menu, Modal, Form, Select, Input } from "antd";
import { PlusOutlined, HomeOutlined } from "@ant-design/icons";

import { useParams, Link } from "react-router-dom";

import { Auth, API, graphqlOperation } from "aws-amplify";
import * as mutations from "../../graphql/mutations";
import * as queries from "../../graphql/queries";

const { Sider } = Layout;
const { Option } = Select;

const Sidebar = (props) => {
  const [form] = Form.useForm();
  const [createChatModal, setCreateChatModal] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  let { roomID } = useParams();
  const [room, setRoom] = useState();
  const [chats, setChats] = useState([]);

  const toggle = () => {
    setCollapsed((c) => !c);
  };

  const getRoom = async (id) => {
    return await API.graphql(graphqlOperation(queries.getRoom, { id }));
  };

  useEffect(() => {
    console.log(roomID);
    getRoom(roomID)
      .then((res) => {
        console.log(res);
        setRoom(res.data.getRoom);
        setChats(res.data.getRoom.chats.items);
      })
      .catch((err) => console.log(err));
  }, [roomID]);

  const createChat = async (name) => {
    return await API.graphql(
      graphqlOperation(mutations.createChat, {
        input: {
          chatRoomId: roomID,
          name,
        },
      })
    );
  };

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={toggle}
      style={{ overflow: "scroll" }}
    >
      <Menu theme="dark" mode="inline" defaultSelectedKeys={[0]} key>
        <Menu.Item
          key={0}
          icon={<PlusOutlined />}
          onClick={() => setCreateChatModal(true)}
        >
          "Create Chat"
        </Menu.Item>
        {chats.map((chat) => (
          <Menu.Item icon={<HomeOutlined />} key={chat.id}>
            <Link to={`/${roomID}/${chat.id}`}>{chat.name}</Link>
          </Menu.Item>
        ))}
      </Menu>
      <Modal
        visible={createChatModal}
        title="Create Chat"
        okText="Create"
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              console.log(values);
              createChat(values.name)
                .then((res) => {
                  console.log(res);
                  setCreateChatModal(false);
                  setChats((prevChat) => [...prevChat, res.data.createChat]);
                })
                .catch((err) => console.log(err));
            })
            .catch((info) => {
              console.log("Validate Failed:", info);
            });
        }}
        onCancel={() => setCreateChatModal(false)}
      >
        <Form form={form} layout="vertical">
          <Form.Item name="name">
            <Input
              placeholder="Chat Name"
              onChange={(e) => {
                form.setFieldsValue({ name: e.target.value });
              }}
            />
          </Form.Item>
        </Form>
      </Modal>
    </Sider>
  );
};

export default Sidebar;
