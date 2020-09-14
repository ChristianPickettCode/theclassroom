import React, { useState } from "react";
import { Modal, Form, Input, List } from "antd";
const { Search } = Input;

const SearchModal = ({ visible, setVisible }) => {
  const [results, setResults] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  return (
    <Modal
      visible={visible}
      title="Search Rooms"
      footer={null}
      onCancel={() => setVisible(false)}
    >
      <Form layout="vertical">
        <Form.Item name="search">
          <Search
            placeholder="input search text"
            onSearch={(value) => {
              setSearchValue(value);
              setResults(false);
            }}
            enterButton
          />
        </Form.Item>
      </Form>
      <div hidden={results}>
        <List
          style={{ overflow: "scroll" }}
          size="small"
          header={<div>{`Search : ${searchValue}`}</div>}
          footer={<div>{`${data.length} items`}</div>}
          bordered
          dataSource={data}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
      </div>
    </Modal>
  );
};

const data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires.",
];

export default SearchModal;
