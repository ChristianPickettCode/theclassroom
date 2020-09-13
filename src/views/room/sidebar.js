import React, { useState, useEffect, useContext } from "react";

import { Layout, Menu, Modal, Form, Input, Select } from "antd";
import { PlusOutlined, HomeOutlined } from "@ant-design/icons";

import { Auth, API, graphqlOperation } from "aws-amplify";
import * as mutations from "../../graphql/mutations";
import * as queries from "../../graphql/queries";

import UserContext from "../../components/UserContext";

import { Link } from "react-router-dom";

const { Sider } = Layout;

const { Option } = Select;

const Sidebar = (props) => {
  const [form] = Form.useForm();
  const [createRoomModal, setCreateRoomModal] = useState(false);
  const [rooms, setRooms] = useState([]);

  // const [user, setUser] = useState(null);

  const getRooms = async () => {
    return await API.graphql(graphqlOperation(queries.listRooms));
  };

  const user = useContext(UserContext);
  console.log(user);

  useEffect(() => {
    getRooms()
      .then((res) => {
        console.log(res);
        setRooms(res.data.listRooms.items);
      })
      .catch((err) => console.log(err));
  }, []);

  const createRoom = async (name, faculty) => {
    return await API.graphql(
      graphqlOperation(mutations.createRoom, {
        input: {
          roomAdminId: user.id,
          group: faculty,
          name,
        },
      })
    );
  };

  return (
    <Sider theme="light" collapsed={true} style={{ overflow: "scroll" }}>
      <Menu theme="light" mode="inline" defaultSelectedKeys={[0]} key>
        <Menu.Item
          key={0}
          icon={<PlusOutlined />}
          onClick={() => setCreateRoomModal(true)}
        >
          "Create Room"
        </Menu.Item>
        {rooms.map((room) => (
          <Menu.Item key={room.id} icon={<HomeOutlined />}>
            <Link to={`/${room.id}`}>{room.name}</Link>
          </Menu.Item>
        ))}
      </Menu>
      <Modal
        visible={createRoomModal}
        title="Create Room"
        okText="Create"
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              console.log(values);
              createRoom(values.name, values.faculty)
                .then((res) => {
                  console.log(res);
                  setCreateRoomModal(false);
                  setRooms((prevRooms) => [...prevRooms, res.data.createRoom]);
                })
                .catch((err) => console.log(err));
            })
            .catch((info) => {
              console.log("Validate Failed:", info);
            });
        }}
        onCancel={() => setCreateRoomModal(false)}
      >
        <Form form={form} layout="vertical">
          <Form.Item name="faculty">
            <Select
              placeholder="Faculty"
              onChange={(value) => {
                form.setFieldsValue({ faculty: value });
              }}
            >
              <Option value="Arts">Arts</Option>
              <Option value="Business">Business</Option>
              <Option value="Education">Education</Option>
              <Option value="Engineering">Engineering</Option>
              <Option value="Science">Science</Option>
              <Option value="Other">Other</Option>
            </Select>
          </Form.Item>
          <Form.Item name="name">
            <Input
              placeholder="Room Name"
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
