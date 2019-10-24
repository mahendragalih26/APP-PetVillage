import React, { Component, Fragment } from "react";
import {
  Container,
  Row,
  Col,
  Navbar,
  Badge,
  Jumbotron,
  Button,
  ListGroup,
  Spinner
} from "react-bootstrap";
import { connect } from "react-redux";
import { getAnimalById } from "../../Publics/Redux/Actions/Animals";

import Swal from "sweetalert2";

import "../../CSS/AppCss.css";

class detailAnimal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataDetail: []
    };
  }

  componentDidMount = async () => {
    await this.props
      .dispatch(getAnimalById(this.props.id_animal))
      .then(() => {
        console.log("awowkowkok = ", this.props.animals.animal);
        this.setState({
          dataDetail: this.props.animals.animal
        });
      })
      .catch(err => {
        console.log("this err from dispatch = ", err);
        console.log("isi props = ", this.props);
        Swal.fire({
          title: "<strong>Session Expired</strong>",
          type: "info",
          html: "please re-Login your account",
          showCloseButton: true,
          showCancelButton: true,
          focusConfirm: false,
          confirmButtonText: '<i class="fas fa-power-off"></i> LogOut!',
          // confirmButtonAriaLabel: "Thumbs up, great!"
          // cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
          // cancelButtonAriaLabel: "Thumbs down"
          preConfirm: () => {
            localStorage.clear();
            window.location.reload();
          }
        });
        // this.setState({
        //   session: this.props.animals.isRejected
        // });
      });
  };

  render() {
    console.log("id params = ", this.props.id_animal);
    console.log("data animal  = ", this.state.dataDetail.animal);
    let dataDetail = this.state.dataDetail.animal;
    let image =
      "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/46344614/1/?bust=1571722917&width=600";
    return (
      <Fragment>
        <Container style={{ margin: "0px", height: "100%" }}>
          {dataDetail !== undefined ? (
            <Row
              style={{
                position: "fixed",
                height: "100%",
                width: "100%",
                backgroundSize: "contain"
              }}
            >
              <Col
                md={5}
                className="imageBG"
                style={{
                  backgroundImage: `url(${
                    dataDetail.photos[0] !== undefined
                      ? dataDetail.photos[0].large
                      : `https://i.redd.it/b3esnz5ra34y.jpg`
                  })`,
                  backgroundRepeat: "no-repeat",
                  height: "100%",
                  width: "50%",
                  backgroundPosition: "center"
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    fontSize: "40px",
                    bottom: "10px",
                    left: "10px"
                  }}
                >
                  <Badge pill variant="primary">
                    Age : {dataDetail.age}
                  </Badge>
                </div>
              </Col>
              <Col md={7} style={{ padding: "0px" }}>
                <Navbar bg="dark" variant="dark">
                  <Navbar.Brand href="/">
                    Contact : {dataDetail.contact.phone}
                  </Navbar.Brand>
                  <Navbar.Brand className="mr-auto"></Navbar.Brand>
                  <Navbar.Brand href="/">
                    {dataDetail.contact.email}
                  </Navbar.Brand>
                </Navbar>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%"
                  }}
                >
                  <div style={{ width: "70%" }}>
                    <Jumbotron style={{ margin: "0px" }}>
                      <h1>{dataDetail.name} Bio</h1>
                      <p>{dataDetail.description}</p>
                    </Jumbotron>
                  </div>
                  <div style={{ width: "30%" }}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        height: "100%"
                      }}
                    >
                      <div style={{ height: "30%" }}>
                        {/* <div style={{ height: "100%" }}> */}
                        <div
                          style={{
                            paddingTop: "15%",
                            paddingLeft: "10px",
                            paddingRight: "10px"
                          }}
                        >
                          <Button variant="outline-primary" size="lg" block>
                            <i class="far fa-comments"></i>&nbsp; Ask
                          </Button>
                        </div>
                        {/* </div> */}
                      </div>
                      <div style={{ height: "40%" }}>
                        <div
                          style={{
                            paddingTop: "10%",
                            paddingLeft: "10px",
                            paddingRight: "10px"
                          }}
                        >
                          <Button variant="outline-danger" size="lg" block>
                            <i class="far fa-heart"></i>&nbsp; Favourite
                          </Button>
                        </div>
                      </div>
                      <div style={{ height: "30%" }}>
                        <div
                          style={{
                            paddingLeft: "10px",
                            paddingRight: "10px"
                          }}
                        >
                          <Button variant="outline-success" size="lg" block>
                            <i class="fas fa-money-bill-wave"></i>&nbsp;Donation
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%"
                  }}
                >
                  <Container>
                    <Row style={{ fontSize: "20px" }}>
                      <Col md={4}>
                        <ListGroup variant="flush">
                          <ListGroup.Item>Coat Size </ListGroup.Item>
                          <ListGroup.Item>Breeds</ListGroup.Item>
                          <ListGroup.Item>Gender</ListGroup.Item>
                          <ListGroup.Item>Species</ListGroup.Item>
                          <ListGroup.Item>Animal size</ListGroup.Item>
                          <ListGroup.Item>Animal Status</ListGroup.Item>
                        </ListGroup>
                      </Col>
                      <Col md={8}>
                        <ListGroup variant="flush">
                          <ListGroup.Item>
                            {dataDetail.coat || "-"}{" "}
                          </ListGroup.Item>
                          <ListGroup.Item>
                            {dataDetail.breeds.primary || "-"},{" "}
                            {dataDetail.breeds.secondary || "-"}
                          </ListGroup.Item>
                          <ListGroup.Item>
                            {dataDetail.gender || "-"}
                          </ListGroup.Item>
                          <ListGroup.Item>
                            {dataDetail.species || "-"}
                          </ListGroup.Item>
                          <ListGroup.Item>
                            {dataDetail.size || "-"}
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <Badge pill variant="success">
                              {dataDetail.status || "-"}
                            </Badge>
                          </ListGroup.Item>
                        </ListGroup>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </Col>
            </Row>
          ) : (
            <Row
              style={{
                position: "fixed",
                height: "100%",
                width: "100%",
                backgroundSize: "contain"
              }}
            >
              <Col
                md={12}
                style={{
                  backgroundRepeat: "no-repeat",
                  height: "100%",
                  width: "50%",
                  textAlign: "center"
                }}
              >
                <div>
                  <Spinner animation="grow" variant="primary" />
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  console.log("ini state di home = ", state);
  return {
    animals: state.Animals
  };
};

export default connect(mapStateToProps)(detailAnimal);
