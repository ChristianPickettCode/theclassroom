import React, { useState } from "react";
import { Modal, Form, Input, Select, message } from "antd";

import { Auth, API, graphqlOperation } from "aws-amplify";
import * as mutations from "../../graphql/mutations";
import * as queries from "../../graphql/queries";

const { Option } = Select;

const suffix = {
  "mail.mcgill.ca": "mcgill",
  "gmail.com": "other",
};

const validEmailSuffixs = ["mail.mcgill.ca", "gmail.com"];

const SignUpModal = ({
  visible,
  setVisible,
  setSignInVisible,
  setVerifyVisible,
}) => {
  const [form] = Form.useForm();
  const [emailSuffix, setEmailSuffix] = useState("");
  const [, setFormData] = useState({});

  const signUp = async (email, password) => {
    return await Auth.signUp({
      username: email,
      password,
      attributes: {
        email,
      },
    });
  };

  const onCountryChange = (value) => {
    console.log(value);
    switch (value) {
      case "canada":
        form.setFieldsValue({ country: "canada" });
        setFormData({ country: "canada" });
        return;
      default:
        return;
    }
  };

  const onSchoolChange = (value) => {
    console.log(value);
    switch (value) {
      case "mcgill":
        form.setFieldsValue({ school: "mcgill" });
        setFormData({ school: "mcgill" });
        setEmailSuffix("mail.mcgill.ca");
        return;
      case "other":
        form.setFieldsValue({ school: "other" });
        setFormData({ school: "other" });
        setEmailSuffix("gmail.com");
        return;
      default:
        return;
    }
  };

  const onEmailChange = (value) => {
    form.setFieldsValue({ email: value.target.value });
    setFormData({ email: value.target.value });
  };

  const onPassChange = (value) => {
    form.setFieldsValue({ password: value.target.value });
    setFormData({ password: value.target.value });
  };

  const validateFields = () => {
      
  }

  return (
    <Modal
      title="Welcome to theclassroom"
      visible={visible}
      okText="Sign Up"
      onOk={() => {
        if (form.getFieldValue("password")) {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              console.log(values);
              signUp(`${values.email}@${emailSuffix}`, values.password)
                .then((res) => {
                  console.log(res);

                  setVisible(false);
                  setVerifyVisible(true);
                })
                .catch((err) => {
                  console.log(err);
                  message.error(err.message);
                });
            })
            .catch((info) => {
              message.error(`Validate Failed: ${info}`);
            });
        }
      }}
      cancelText="Sign In"
      onCancel={() => {
        setVisible(false);
        setSignInVisible(true);
      }}
    >
      <h4>Uni is a game but it doesn't have to be played single player</h4>
      <h4>
        Let's connect you to other players (students) both at your school and at
        others
      </h4>
      <Form
        form={form}
        layout="vertical"
        initialValues={{ modifier: "public" }}
      >
        <Form.Item name="country">
          <Select placeholder="Where are you from ?" onChange={onCountryChange}>
            <Option value="canada">Canada</Option>
          </Select>
        </Form.Item>
        {form.getFieldValue("country") ? (
          <Form.Item name="school">
            <Select placeholder="Where do you go?" onChange={onSchoolChange}>
              <Option value="mcgill">McGill</Option>
              <Option value="other">other</Option>
            </Select>
          </Form.Item>
        ) : (
          ""
        )}
        {form.getFieldValue("school") ? (
          <>
            <h4>
              alright so this is your school, can't blame you decent choose
            </h4>
            <h4>
              so let's make you an account, only students from the above school
              are welcomed
            </h4>
            <Form.Item name="email" onChange={onEmailChange}>
              <Input placeholder="enter your email" type="email" />
            </Form.Item>
          </>
        ) : (
          ""
        )}
        {form.getFieldValue("email") ? (
          <Form.Item name="password" onChange={onPassChange}>
            <Input placeholder="enter a password" type="password" />
          </Form.Item>
        ) : (
          ""
        )}
      </Form>
    </Modal>
  );
};

export default SignUpModal;
