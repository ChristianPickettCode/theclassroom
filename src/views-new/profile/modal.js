import React, { useEffect } from "react";
import { Modal, List, Image, Row, Layout, Col, Divider, Button } from "antd";
const { Content } = Layout;

const ProfileModal = ({ visible, setVisible, id, userData }) => {

  useEffect(() => {
    if (userData) {
      console.log(id);
      console.log(userData)
    }
    
    return () => {
      
    }
  }, [id, userData]);

  return (
    <Modal
      visible={visible}
      title="Profile"
      footer={null}
      onCancel={() => setVisible(false)}
    >
      <Layout>
        <Content style={{ backgroundColor: "white" }}>
        <Row justify="space-between">
          <Col></Col>
          <Col style={{marginRight:"20px"}}>
            <Button>Edit</Button>
          </Col>
        </Row>
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
              <h2>Name</h2>
              <h3>School</h3>
              <h3>Faculty</h3>
              <h4>Degree</h4>
              <h5>Start - End</h5>
              <h4>Email</h4>
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
