import React from "react";
import { Layout } from "antd";
const { Header, Sider, Content } = Layout;

const Search = () => {
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
        Search Content
      </Content>
    </Layout>
  );
};

export default Search;
