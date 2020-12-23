import React, { useState } from "react";
import { Modal, Form, Input, Select, message } from "antd";

import { Auth, API, graphqlOperation } from "aws-amplify";
import * as mutations from "../../graphql/mutations";
import * as queries from "../../graphql/queries";
import SignUpModal from "./signUpModal";

const { Option } = Select;

const suffix = {
  "mail.mcgill.ca": "mcgill",
  // "mail.utoronto.ca": "uoft",
  // "student.ubc.ca": "ubc",
  "gmail.com": "other",
};

const AuthModal = () => {
  const [form] = Form.useForm();
  const [formData, setFormData] = useState({});
  const [verifyVisible, setVerifyVisible] = useState(false);
  const [signUpVisible, setSignUpVisible] = useState(true);
  const [signInVisible, setSignInVisible] = useState(false);
  const [emailSuffix, setEmailSuffix] = useState("");

  const onCountryChange = (value) => {
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
    switch (value) {
      case "mcgill":
        form.setFieldsValue({ school: "mcgill" });
        setFormData({ school: "mcgill" });
        setEmailSuffix("mail.mcgill.ca");
        return;
      // case "uoft":
      //   form.setFieldsValue({ school: "uoft" });
      //   setFormData({ school: "uoft" });
      //   setEmailSuffix("mail.utoronto.ca");
      //   return;
      // case "ubc":
      //   form.setFieldsValue({ school: "ubc" });
      //   setFormData({ school: "ubc" });
      //   setEmailSuffix("student.ubc.ca");
      //   return;
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

  const onCodeChange = (value) => {
    form.setFieldsValue({ code: value.target.value });
    setFormData({ code: value.target.value });
  };

  const signUp = async (email, password) => {
    return await Auth.signUp({
      username: email,
      password,
      attributes: {
        email,
      },
    });
  };

  const confirmSignUp = async (username, code) => {
    return await Auth.confirmSignUp(username, code);
  };

  const signIn = async (username, password) => {
    return await Auth.signIn(username, password);
  };

  const createUser = async (id, email, school) => {
    return await API.graphql(
      graphqlOperation(mutations.createUser, {
        input: {
          id,
          email,
          school,
        },
      })
    );
  };

  const getUser = async (id) => {
    return await API.graphql(graphqlOperation(queries.getUser, { id }));
  };

  return (
    <>
      <SignUpModal
        visible={signUpVisible}
        setVisible={setSignUpVisible}
        setSignInVisible={setSignInVisible}
        setVerifyVisible={setVerifyVisible}
      />
      <Modal
        title="Verify"
        visible={verifyVisible}
        onOk={() => {
          if (form.getFieldValue("code")) {
            form
              .validateFields()
              .then((values) => {
                form.resetFields();
                console.log(values);
                confirmSignUp(`${values.email}@${emailSuffix}`, values.code)
                  .then((res) => {
                    console.log(res);
                    setVerifyVisible(false);
                    setSignInVisible(true);
                  })
                  .catch((err) => message.error(err));
              })
              .catch((info) => {
                message.error(`Validate Failed: ${info}`);
              });
          }
        }}
      >
        <h4>{`Alright we emailed you (${form.getFieldValue(
          "email"
        )}@${emailSuffix}) a verification code, we don't play with just
        anyone`}</h4>
        <Form form={form}>
          <Form.Item name="code" onChange={onCodeChange}>
            <Input placeholder="enter the verification code" />
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        title="Sign In"
        visible={signInVisible}
        okText="Sign In"
        cancelText="Sign Up"
        onOk={() => {
          if (form.getFieldValue("password")) {
            form
              .validateFields()
              .then((values) => {
                form.resetFields();
                console.log(values);
                signIn(values.email, values.password)
                  .then((res) => {
                    console.log(res);
                    console.log(
                      res.attributes.sub,
                      values.email,
                      values.school
                    );
                    getUser(res.attributes.sub)
                      .then((resData) => {
                        console.log(resData);
                        if (resData.data.getUser === null) {
                          createUser(
                            res.attributes.sub,
                            values.email,
                            suffix[values.email.split("@")[1]]
                          )
                            .then((resData) => {
                              console.log("resData", resData);
                              setSignInVisible(false);
                              window.location = "/";
                            })
                            .catch((err) => message.error(err));
                        }
                        setSignInVisible(false);
                        console.log("LOG IN");
                        window.location = "/";
                      })
                      .catch((err) => {
                        message.error(`ERROR NO USER:  ${err}`);
                        createUser(
                          res.attributes.sub,
                          values.email,
                          suffix[values.email.split("@")[1]]
                        )
                          .then((resData) => {
                            console.log("resData", resData);
                            setSignInVisible(false);
                          })
                          .catch((err) => message.error(err));
                      });
                  })
                  .catch((err) => message.error(err));
              })
              .catch((info) => {
                message.error(`Validate Failed: ${info}`);
              });
          }
        }}
        onCancel={() => {
          setSignUpVisible(true);
          setSignInVisible(false);
        }}
      >
        <Form form={form} layout="vertical">
          <Form.Item name="email" label="Email" onChange={onEmailChange}>
            <Input placeholder="enter your email" type="email" />
          </Form.Item>

          <Form.Item name="password" label="Password" ponChange={onPassChange}>
            <Input placeholder="enter your password" type="password" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AuthModal;
