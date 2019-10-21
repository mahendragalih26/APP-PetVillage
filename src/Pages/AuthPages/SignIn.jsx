import React, { Component, Fragment } from "react";
import { Card, Form, Button, Row, Col, Image } from "react-bootstrap";

// import firebase from "firebase";
import firebase from "../../Configs/Firebase";

import bg from "../../Assets/bg/bg.jpg";
import bg3 from "../../Assets/bg/bg2.jpg";

import { Client } from "@petfinder/petfinder-js";
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
      expired: ""
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
      .signInWithEmailAndPassword(formData.email, formData.password);
    // .then(async res => {
    //   // AsyncStorage.setItem('uid', res.user.uid);
    //   await firebase
    //     .database()
    //     .ref("/users/" + res.user.uid)
    //     .update({ status: "online" });
    //   window.localStorage.setItem("uid", res.user.uid);
    //   window.localStorage.setItem("name", res.user.username);
    //   window.localStorage.setItem("email", res.user.email);
    //   window.localStorage.setItem("image", res.user.image);

    //   // Toast.show({
    //   //   text: `Welcome ${res.user.username}`,
    //   //   buttonText: 'Ok',
    //   //   type: 'success',
    //   //   position: 'bottom',
    //   //   duration: 4000,
    //   //   style: styles.toast,
    //   // });

    //   await client
    //     .authenticate()
    //     .then(resp => {
    //       this.setState({
    //         myToken: resp.data.access_token,
    //         expired: resp.data.expires_in
    //       });
    //       // const token = resp.data.access_token;
    //       // const expires = resp.data.expires_in;
    //     })
    //     .then(console.log("isi Tokennya adalah ", this.state.myToken));
    //   await client.animal.search().then(resp => {
    //     this.setState({
    //       animals: resp.data.animals
    //     });
    //   });

    //   // this.props.navigation.navigate("HomeScreen");
    // });
  };

  componentDidMount = async () => {
    // await client
    //   .authenticate()
    //   .then(resp => {
    //     this.setState({
    //       myToken: resp.data.access_token,
    //       expired: resp.data.expires_in
    //     });
    //     // const token = resp.data.access_token;
    //     // const expires = resp.data.expires_in;
    //   })
    //   .then(console.log("isi Tokennya adalah ", this.state.myToken));
    // await client.animal.search().then(resp => {
    //   this.setState({
    //     animals: resp.data.animals
    //   });
    // });
    // await window.localStorage.getItem("uid", (err, res) => {
    //   console.log(err, res);
    //   console.log("ini responnya =", res);
    //   if (res) {
    //     // this.props.navigation.navigate('HomeScreen');
    //   }
    // });
  };

  render() {
    console.log("my token = ", this.state.myToken);
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
                <Form onSubmit={this.handleSubmit}>
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
                  <div className="text-right">
                    <Button variant="primary" type="submit">
                      Masuk
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Fragment>
    );
  }
}

export default SignIn;
