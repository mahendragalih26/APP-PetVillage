import React, { Component, Fragment } from "react";
import { Badge, Container, Row, Col, Spinner } from "react-bootstrap";

import "../../CSS/AppCss.css";

import HomePagi from "../Pagination/Home.jsx";

import { Link } from "react-router-dom";

class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log("props dari Home, ini card list = ", this.props);
    console.log("searchnya dari Home, ini card list = ", this.props.search);
    // let { dataAnimals } = this.props;
    let Animals = this.props.dataAnimals.animals;
    let Paginations = this.props.dataAnimals.pagination;
    return (
      <Fragment>
        <Container
          className="justify-content-md-center"
          style={{ maxWidth: "80%" }}
        >
          <Row>
            {Animals !== undefined ? (
              <Fragment>
                {Animals.map((animal, index) => (
                  <Col md="3" className="mb-5" key={index}>
                    <Link
                      to={`/detail/${animal.id}`}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <div class="card-data">
                        <div class="content-data">
                          <div class="front">
                            <div
                              style={{
                                position: "absolute",
                                fontSize: "20px",
                                top: "8px",
                                right: "10px"
                              }}
                            >
                              <Badge pill variant="primary">
                                {animal.status}
                              </Badge>
                            </div>
                            <div
                              style={{
                                position: "absolute",
                                fontSize: "20px",
                                top: "8px",
                                left: "10px"
                              }}
                            >
                              <Badge pill variant="danger">
                                {animal.species}
                              </Badge>
                            </div>
                            <img
                              src={
                                animal.photos[0] !== undefined
                                  ? animal.photos[0].large
                                  : "https://i.redd.it/b3esnz5ra34y.jpg"
                              }
                              style={{
                                height: "100%",
                                width: "100%",
                                backgroundColor: " #429ef5"
                              }}
                            />
                          </div>
                          {/* <div class="front">Front</div> */}
                          <div class="back">
                            <div style={{ marginTop: "40px" }}>
                              <h2>{animal.name}</h2>
                              <p>
                                {animal.age} . {animal.gender}
                              </p>
                              <h4>
                                {animal.contact.address.city},{" "}
                                {animal.contact.address.country}
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </Col>
                ))}
              </Fragment>
            ) : (
              <div style={{ left: "50%" }}>
                <Spinner animation="grow" variant="primary" />
              </div>
            )}
          </Row>
          <Row style={{ justifyContent: "center" }}>
            <HomePagi pages={Paginations} nextPage={this.props.nextPage} />
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default CardList;
