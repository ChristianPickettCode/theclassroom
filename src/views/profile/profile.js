import React from "react";
import { Layout, Image, Form, Input, Button, Row } from "antd";
const { Content } = Layout;

const Profile = () => {
  return (
    <Layout>
      <Content
        style={{
          margin: "24px 16px",
          padding: 24,
          minHeight: 280,
          backgroundColor: "white",
        }}
      >
        <Button>Profile Modal</Button>
        <Row>
          <Image
            width={200}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
          <Form layout="vertical" style={{ marginLeft: "32px" }}>
            <Form.Item label="Field A">
              <Input placeholder="input placeholder" />
            </Form.Item>
            <Form.Item label="Field B">
              <Input placeholder="input placeholder" />
            </Form.Item>
            <Form.Item>
              <Button type="primary">Submit</Button>
            </Form.Item>
          </Form>
        </Row>
      </Content>
    </Layout>
  );
};

export default Profile;
