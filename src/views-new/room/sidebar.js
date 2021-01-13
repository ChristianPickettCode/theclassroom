import React, { useState, useEffect } from "react";

import { Layout, Menu, Modal, Form, Input, Select } from "antd";
import {
  PlusOutlined,
  HomeOutlined,
  ArrowRightOutlined,
//   SearchOutlined,
  UserOutlined,
  LogoutOutlined
} from "@ant-design/icons";

import { API, graphqlOperation } from "aws-amplify";
import * as mutations from "../../graphql/mutations";
import * as queries from "../../graphql/queries";

import { Link, Redirect, useLocation } from "react-router-dom";
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
    const [redirect, setRedirect] = useState();
    const location = useLocation();
    
    // const [user, setUser] = useState(null);

    const getRooms = async () => {
        return await API.graphql(graphqlOperation(queries.listRooms));
    };

    useEffect(() => {
        getRooms()
        .then((res) => {
            // console.log(res);
            let r = res.data.listRooms.items;
            if (props.userData.joinedRooms) {
              const filteredRooms = r.filter(i => props.userData.joinedRooms.includes(i.id));
              setRooms(filteredRooms);
            }
            
        })
        .catch((err) => console.log(err));
    }, []);

    const createRoom = async (name, faculty) => {
        return await API.graphql(
        graphqlOperation(mutations.createRoom, {
            input: {
            roomAdminId: props.userData.id,
            group: faculty,
            name,
            },
        })
        );
    };

    return (
        <Sider theme="light" collapsed={true} style={{ overflow: "scroll" }}>
      <Menu theme="light" mode="inline" defaultSelectedKeys={[location.pathname.split("/")[1]]} key>
        <Menu.Item
          key={0}
          icon={<HomeOutlined />}
          style={{ marginTop: "16px" }}
        >
          <Link to={`/`}>"Home"</Link>
        </Menu.Item>
        {/* <Menu.Item
          key={1}
          icon={<UserOutlined />}
          onClick={() => setProfileModalVisible(true)}
        >
          "Profile"
        </Menu.Item> */}
        {/* <Menu.Item
          key={2}
          icon={<SearchOutlined />}
          onClick={() => setSearchModalVisible(true)}
        >
          "Search"
        </Menu.Item> */}
        
        <Menu.Item
          key={3}
          icon={<PlusOutlined />}
          onClick={() => setCreateRoomModal(true)}
        >
          "Create Room"
        </Menu.Item>

        <Menu.Item
          key={4}
          icon={<LogoutOutlined />}
          onClick={props.logout}
        >
          {/* <Link to={`/search`}>"Search"</Link> */}
          "Logout"
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
            //   console.log(values);
              createRoom(values.name, values.faculty)
                .then((res) => {
                //   console.log(res);
                  setCreateRoomModal(false);
                  setRooms((prevRooms) => [...prevRooms, res.data.createRoom]);
                  setRedirect(res.data.createRoom.id);
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
      {redirect ? <Redirect to={`/${redirect}`} /> : ""}
      {/* <ProfileModal
        visible={profileModalVisible}
        setVisible={setProfileModalVisible}
        id={props.userData.id}
        userData={props.userData}
      />
      <SearchModal
        visible={searchModalVisible}
        setVisible={setSearchModalVisible}
      /> */}
    </Sider>
    )
}

export default Sidebar
