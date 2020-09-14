import React, { useState, useEffect, useContext } from "react";

import { Layout, Menu, Modal, Form, Input, Select } from "antd";
import {
  PlusOutlined,
  HomeOutlined,
  ArrowRightOutlined,
  SearchOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { Auth, API, graphqlOperation } from "aws-amplify";
import * as mutations from "../../graphql/mutations";
import * as queries from "../../graphql/queries";

import UserContext from "../../components/UserContext";

import { Link } from "react-router-dom";
import SearchModal from "../search/modal";
import ProfileModal from "../profile/modal";

const { Sider } = Layout;

const { Option } = Select;

const Sidebar = (props) => {
  const [form] = Form.useForm();
  const [createRoomModal, setCreateRoomModal] = useState(false);
  const [rooms, setRooms] = useState([]);
  const [searchModalVisible, setSearchModalVisible] = useState(false);
  const [profileModalVisible, setProfileModalVisible] = useState(false);

  // const [user, setUser] = useState(null);

  const getRooms = async () => {
    return await API.graphql(graphqlOperation(queries.listRooms));
  };

  const user = useContext(UserContext);

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
          icon={<HomeOutlined />}
          style={{ marginTop: "16px" }}
        >
          <Link to={`/`}>"Home"</Link>
        </Menu.Item>
        <Menu.Item
          key={1}
          icon={<UserOutlined />}
          onClick={() => setProfileModalVisible(true)}
        >
          {/* <Link to={`/profile`}>"Profile"</Link> */}
          "Profile"
        </Menu.Item>
        <Menu.Item
          key={2}
          icon={<SearchOutlined />}
          onClick={() => setSearchModalVisible(true)}
        >
          {/* <Link to={`/search`}>"Search"</Link> */}
          "Search"
        </Menu.Item>
        <Menu.Item
          key={3}
          icon={<PlusOutlined />}
          onClick={() => setCreateRoomModal(true)}
        >
          "Create Room"
        </Menu.Item>

        {rooms.map((room) => (
          <Menu.Item key={room.id} icon={<ArrowRightOutlined />}>
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
      <ProfileModal
        visible={profileModalVisible}
        setVisible={setProfileModalVisible}
      />
      <SearchModal
        visible={searchModalVisible}
        setVisible={setSearchModalVisible}
      />
    </Sider>
  );
};

export default Sidebar;
