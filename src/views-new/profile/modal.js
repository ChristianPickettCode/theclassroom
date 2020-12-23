import React from "react";
import { Modal, List, Image, Row, Layout, Col, Divider } from "antd";
const { Content } = Layout;

const ProfileModal = ({ visible, setVisible }) => {
  return (
    <Modal
      visible={visible}
      title="My Profile"
      footer={null}
      onCancel={() => setVisible(false)}
    >
      <Layout>
        <Content style={{ backgroundColor: "white" }}>
          <Row>
            <Col>
              <Row justify="center">
                <Image
                  width={200}
                  src="https://images.unsplash.com/photo-1503212556734-c0ca0c49c8b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
                />
              </Row>
            </Col>
            <Col style={{ marginLeft: "24px" }}>
              <h2>Chris Pickett</h2>
              <h3>McGill University</h3>
              <h3>Computer Science</h3>
              <h3>2016 - 2021</h3>
              <h4>christian.pickett@mail.mcgill.ca</h4>
            </Col>
          </Row>
          <Divider>Courses</Divider>
          <Row justify="space-between">
            <Col span={11}>
              <List
                size="small"
                header={<div>Term 1</div>}
                bordered
                dataSource={["COMP 202", "COMP 250"]}
                renderItem={(item) => <List.Item>{item}</List.Item>}
              />
            </Col>
            <Col span={11}>
              <List
                size="small"
                header={<div>Term 2</div>}
                bordered
                dataSource={["COMP 330", "COMP 551"]}
                renderItem={(item) => <List.Item>{item}</List.Item>}
              />
            </Col>
          </Row>
        </Content>
      </Layout>
    </Modal>
  );
};

export default ProfileModal;
