import React from "react";
import { Layout, Card, Col, Row, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  CodeOutlined,
  UserAddOutlined,
  EyeOutlined,
} from "@ant-design/icons";
const { Header, Sider, Content } = Layout;
const { Meta } = Card;

const Home = () => {
  return (
    <Layout>
      <Content
        style={{
          margin: "24px 16px",
          padding: 24,
          minHeight: 280,
        }}
      >
        <h3>"Home"</h3>
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <Card
              size="small"
              bordered={false}
              actions={[
                <UserAddOutlined key="setting" />,
                <EyeOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              <Meta
                avatar={<CodeOutlined style={{ fontSize: "24px" }} />}
                title="COMP 202"
                description={
                  <div>
                    <p style={{ marginBottom: "0" }}>216 students</p>
                    <p style={{ marginBottom: "0" }}>Last active 20 mins ago</p>
                  </div>
                }
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card
              size="small"
              bordered={false}
              actions={[
                <UserAddOutlined key="setting" />,
                <EyeOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              <Meta
                avatar={<CodeOutlined style={{ fontSize: "24px" }} />}
                title="COMP 202"
                description={
                  <div>
                    <p style={{ marginBottom: "0" }}>216 students</p>
                    <p style={{ marginBottom: "0" }}>Last active 20 mins ago</p>
                  </div>
                }
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card
              size="small"
              bordered={false}
              actions={[
                <UserAddOutlined key="setting" />,
                <EyeOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              <Meta
                avatar={<CodeOutlined style={{ fontSize: "24px" }} />}
                title="COMP 202"
                description={
                  <div>
                    <p style={{ marginBottom: "0" }}>216 students</p>
                    <p style={{ marginBottom: "0" }}>Last active 20 mins ago</p>
                  </div>
                }
              />
            </Card>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <Card
              size="small"
              bordered={false}
              actions={[
                <UserAddOutlined key="setting" />,
                <EyeOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              <Meta
                avatar={<CodeOutlined style={{ fontSize: "24px" }} />}
                title="COMP 202"
                description={
                  <div>
                    <p style={{ marginBottom: "0" }}>216 students</p>
                    <p style={{ marginBottom: "0" }}>Last active 20 mins ago</p>
                  </div>
                }
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card
              size="small"
              bordered={false}
              actions={[
                <UserAddOutlined key="setting" />,
                <EyeOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              <Meta
                avatar={<CodeOutlined style={{ fontSize: "24px" }} />}
                title="COMP 202"
                description={
                  <div>
                    <p style={{ marginBottom: "0" }}>216 students</p>
                    <p style={{ marginBottom: "0" }}>Last active 20 mins ago</p>
                  </div>
                }
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card size="small" title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Home;
