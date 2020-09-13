import React, { useState } from "react";
import { Modal, Form, Input, Select, Button } from "antd";

import { Auth, API, graphqlOperation } from "aws-amplify";
import * as mutations from "../../graphql/mutations";
import * as queries from "../../graphql/queries";

const { Option } = Select;

const suffix = {
  "mail.mcgill.ca": "mcgill",
  "mail.utoronto.ca": "uoft",
  "student.ubc.ca": "ubc",
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
      case "uoft":
        form.setFieldsValue({ school: "uoft" });
        setFormData({ school: "uoft" });
        setEmailSuffix("mail.utoronto.ca");
        return;
      case "ubc":
        form.setFieldsValue({ school: "ubc" });
        setFormData({ school: "ubc" });
        setEmailSuffix("student.ubc.ca");
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

  const onCodeChange = (value) => {
    form.setFieldsValue({ code: value.target.value });
    setFormData({ code: value.target.value });
  };

  const signUp = async (email, password) => {
    try {
      return await Auth.signUp({
        username: email,
        password,
        attributes: {
          email,
        },
      });
    } catch (error) {
      console.log("error signing up:", error);
      return error;
    }
  };

  const confirmSignUp = async (username, code) => {
    try {
      return await Auth.confirmSignUp(username, code);
    } catch (error) {
      console.log("error confirming sign up", error);
      return error;
    }
  };

  const signIn = async (username, password) => {
    try {
      return await Auth.signIn(username, password);
    } catch (error) {
      console.log("error signing in", error);

      return error;
    }
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
      <Modal
        title={
          <span>
            Welcome to theclassroom.
            <a href="https://www.inverse.com/gaming/gg-meaning-in-gaming-good-game-insult">
              gg
            </a>
          </span>
        }
        visible={signUpVisible}
        okText="Sign Up"
        onOk={() => {
          if (form.getFieldValue("password")) {
            form
              .validateFields()
              .then((values) => {
                // form.resetFields();
                console.log(values);
                signUp(`${values.email}@${emailSuffix}`, values.password)
                  .then((res) => {
                    console.log(res);

                    setSignUpVisible(false);
                    setVerifyVisible(true);
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              })
              .catch((info) => {
                console.log("Validate Failed:", info);
              });
          }
        }}
        onCancel={() => {
          window.location =
            "https://www.urbandictionary.com/define.php?term=GG";
        }}
      >
        <h4>Uni is a game but it doesn't have to be played single player</h4>
        <h4>Let's connect you to other players (students)</h4>
        <Form
          form={form}
          layout="vertical"
          initialValues={{ modifier: "public" }}
        >
          <Form.Item name="country">
            <Select
              placeholder="Where are you from ?"
              onChange={onCountryChange}
            >
              <Option value="canada">canada</Option>
            </Select>
          </Form.Item>
          {form.getFieldValue("country") ? (
            <Form.Item name="school">
              <Select
                placeholder="What prison are you in ?"
                onChange={onSchoolChange}
              >
                <Option value="mcgill">mcgill</Option>
                <Option value="uoft">uoft</Option>
                <Option value="ubc">ubc</Option>
                <Option value="other">other</Option>
              </Select>
            </Form.Item>
          ) : (
            ""
          )}
          {form.getFieldValue("school") ? (
            <>
              <h4>
                alright so this is your prison, can't blame you decent choose
              </h4>
              <h4>
                so let's make you an account, only prisoners from the above
                location are welcomed
              </h4>
              <Form.Item name="email" onChange={onEmailChange}>
                <Input
                  placeholder="enter your email, be warned we don't trust we verify"
                  type="email"
                  suffix={`@${emailSuffix}`}
                />
              </Form.Item>
            </>
          ) : (
            ""
          )}
          {form.getFieldValue("email") ? (
            <Form.Item name="password" onChange={onPassChange}>
              <Input
                placeholder="enter a password, protect yourself"
                type="password"
              />
            </Form.Item>
          ) : (
            ""
          )}
        </Form>
        <Button
          onClick={() => {
            setSignUpVisible(false);
            setSignInVisible(true);
          }}
        >
          Sign In
        </Button>
      </Modal>

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
                  .catch((err) => console.log(err));
              })
              .catch((info) => {
                console.log("Validate Failed:", info);
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
                            .catch((err) => console.log(err));
                        }
                        setSignInVisible(false);
                        console.log("LOG IN");
                        window.location = "/";
                      })
                      .catch((err) => {
                        console.log("ERROR NO USER: ", err);
                        createUser(
                          res.attributes.sub,
                          values.email,
                          suffix[values.email.split("@")[1]]
                        )
                          .then((resData) => {
                            console.log("resData", resData);
                            setSignInVisible(false);
                          })
                          .catch((err) => console.log(err));
                      });
                  })
                  .catch((err) => console.log(err));
              })
              .catch((info) => {
                console.log("Validate Failed:", info);
              });
          }
        }}
        onCancel={() => {
          setSignUpVisible(true);
          setSignInVisible(false);
        }}
      >
        <h4>Sign in you bloody wankers</h4>
        <Form form={form} layout="vertical">
          <Form.Item name="email" label="Email" onChange={onEmailChange}>
            <Input placeholder="enter your bloody email" type="email" />
          </Form.Item>

          <Form.Item name="password" label="Password" ponChange={onPassChange}>
            <Input
              placeholder="enter your password you wanker"
              type="password"
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AuthModal;
