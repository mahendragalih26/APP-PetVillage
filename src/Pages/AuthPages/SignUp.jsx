import React, { Component, Fragment } from "react";
import { Card, Form, Button, Row, Col, Image, Spinner } from "react-bootstrap";
import { Redirect } from "react-router-dom";
// import firebase from "firebase";
import firebase from "../../Configs/Firebase";

import bg3 from "../../Assets/bg/bg3.jpg";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        username: "",
        phone: "",
        email: "",
        password: "",
        image:
          "https://www.shareicon.net/data/2016/09/01/822711_user_512x512.png"
      },
      isLoading: false
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

  handleSubmit = () => {
    const { formData } = this.state;
    console.log("emailnya = ", formData.email);
    firebase
      .auth()
      .createUserWithEmailAndPassword(formData.email, formData.password)
      .then(res => {
        this.setState({
          isLoading: true
        });
        console.log("success : ", res);
        this.props.history.push("/login");
      })
      .catch(function(error) {
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  render() {
    console.log("my props = ", this.props);
    return (
      <Fragment>
        <Row
          style={{
            height: "657px",
            width: "100%",
            backgroundColor: "#000",
            margin: "0px"
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
            <h1 style={{ color: "white", zIndex: "10" }}>Daftar Akun</h1>
            <h2 style={{ color: "white", zIndex: "10" }}>
              {" "}
              dan adopsi Hewan Peliharaanmu
            </h2>
            {/* <img
              src={bg}
              style={{ width: "300px", height: "300px", borderRadius: "50px" }}
            /> */}
          </div>
          <Col
            md={4}
            style={{
              padding: "0px"
            }}
          >
            <Card
              style={{
                // margin: "auto",
                width: "100%",
                height: "100%"
                // position: "absolute",
                // zIndex: "4"
              }}
              bg="light"
              variant="primary"
            >
              <Card.Body>
                <Card.Title as="h2" className="text-center">
                  PetVillage
                </Card.Title>
                <Form>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridUsername">
                      <Form.Label>Username</Form.Label>
                      <Form.Control
                        type="text"
                        name="username"
                        placeholder="insert Username here.."
                        onChange={this.handleChange}
                        required
                      />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPhone">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                        type="text"
                        name="phone"
                        placeholder="insert phone number"
                        onChange={this.handleChange}
                        required
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Email</Form.Label>
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
                      <Form.Label>Password</Form.Label>
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
                      Have an Account?
                      <Card.Link href="/"> Click here</Card.Link>
                    </Col>
                  </Form.Row>
                  <Form.Row style={{ marginTop: "20px" }}>
                    {this.state.isLoading === true ? (
                      <Button
                        style={{ width: "100%" }}
                        variant="outline-primary"
                        disabled
                      >
                        <Spinner animation="border" variant="primary" />
                      </Button>
                    ) : (
                      <Button
                        style={{ width: "100%" }}
                        variant="outline-primary"
                        onClick={this.handleSubmit}
                      >
                        Daftar
                      </Button>
                    )}
                  </Form.Row>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Fragment>
    );
  }
}

export default SignUp;
