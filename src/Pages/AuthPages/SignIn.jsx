import React, { Component, Fragment } from "react";
import {
  Card,
  Form,
  Button,
  Row,
  Col,
  Image,
  Alert,
  Container
} from "react-bootstrap";

// import firebase from "firebase";
import firebase from "../../Configs/Firebase";

import bg from "../../Assets/bg/bg.jpg";
import bg3 from "../../Assets/bg/bg2.jpg";

import { Client } from "@petfinder/petfinder-js";
import { CardBody } from "react-bootstrap/Card";
const client = new Client({
  apiKey: process.env.REACT_APP_API_KEY,
  secret: process.env.REACT_APP_SECRET_KEY
});

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        email: "",
        password: ""
      },
      showToast: false,
      myToken: "",
      expired: "",
      errMsg: null
    };
  }

  handleChange = e => {
    let newFormData = { ...this.state.formData };
    const target = e.target;
    const name = target.name;
    const value = target.value;
    newFormData[name] = value;
    this.setState(
      {
        formData: newFormData
      },
      () => {
        console.log(this.state.formData);
      }
    );
  };

  handleSubmit = async () => {
    const { formData } = this.state;
    await firebase
      .auth()
      .signInWithEmailAndPassword(formData.email, formData.password)
      .then(async res => {
        // AsyncStorage.setItem('uid', res.user.uid);
        console.log("response firebase login = ", res);
        await firebase
          .database()
          .ref("/users/" + res.user.uid)
          .update({ status: "online" });
        window.localStorage.setItem("uid", res.user.uid);
        window.localStorage.setItem("name", res.user.displayName);

        await client
          .authenticate()
          .then(resp => {
            this.setState({
              myToken: resp.data.access_token,
              expired: resp.data.expires_in
            });
            window.localStorage.setItem("token", resp.data.access_token);
            // const token = resp.data.access_token;
            // const expires = resp.data.expires_in;
          })
          .then(console.log("isi Tokennya adalah ", this.state.myToken));
        await client.animal.search().then(resp => {
          this.setState({
            animals: resp.data.animals
          });
        });

        this.props.history.push("/home");
      })
      .catch(err => {
        this.setState({
          errMsg: err.message
        });
      });
  };

  render() {
    console.log("my token = ", this.state.myToken);
    return (
      <Fragment>
        <Container style={{ margin: "0px", height: "100%" }}>
          <Row
            style={{
              position: "fixed",
              height: "100%",
              width: "100%",
              backgroundColor: "#000"
            }}
          >
            <Col
              md={8}
              style={{
                // backgroundImage: `url(${bg3})`,
                // width: "600px"
                margin: "0px",
                padding: "0px"
              }}
            >
              <Image
                src={bg3}
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  opacity: "0.7"
                }}
                fluid
              />
            </Col>
            <div
              style={{
                position: "absolute",
                top: "20%",
                width: "70%",
                textAlign: "center"
              }}
            >
              <h1 style={{ color: "white", zIndex: "10" }}>
                Adopsi Hewan Kesayanganmu
              </h1>
              {/* <img
              src={bg}
              style={{ width: "300px", height: "300px", borderRadius: "50px" }}
            /> */}
            </div>
            <Col
              md={4}
              style={{
                padding: "0px",
                heigh: "100%"
              }}
            >
              <Card
                style={{
                  padding: "20px",
                  width: "100%",
                  height: "100%"
                }}
                bg="light"
                variant="primary"
              >
                <Card.Body>
                  <Card.Title
                    as="h2"
                    style={{ fontWeight: "bold", fontSize: "40px" }}
                  >
                    Hello,{" "}
                  </Card.Title>
                  <Card.Title
                    as="h3"
                    style={{ fontWeight: "bold", fontSize: "40px" }}
                  >
                    Welcome Back
                  </Card.Title>
                  <div style={{ marginTop: "30px" }}>
                    <Form>
                      <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                          <Form.Label style={{ fontSize: "20px" }}>
                            Email
                          </Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            placeholder="Your Email..."
                            onChange={this.handleChange}
                            required
                          />
                        </Form.Group>
                      </Form.Row>
                      <Form.Row>
                        <Form.Group as={Col} controlId="formGridPassword">
                          <Form.Label style={{ fontSize: "20px" }}>
                            Password
                          </Form.Label>
                          <Form.Control
                            type="password"
                            name="password"
                            placeholder="Password..."
                            onChange={this.handleChange}
                            required
                          />
                        </Form.Group>
                      </Form.Row>
                      <Form.Row>
                        <Col>
                          Don't Have an Account?
                          <Card.Link href="/register"> Click here</Card.Link>
                        </Col>
                      </Form.Row>
                      <Form.Row style={{ marginTop: "20px" }}>
                        <Button
                          style={{ width: "100%" }}
                          variant="outline-primary"
                          onClick={this.handleSubmit}
                        >
                          Masuk
                        </Button>
                      </Form.Row>
                    </Form>
                  </div>
                  <div style={{ marginTop: "20px" }}>
                    {this.state.errMsg !== null ? (
                      <Alert
                        variant="danger"
                        onClose={() => this.setState({ errMsg: null })}
                        dismissible
                      >
                        <Alert.Heading>Login Failed</Alert.Heading>
                        <p>{this.state.errMsg}</p>
                      </Alert>
                    ) : null}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default SignIn;
