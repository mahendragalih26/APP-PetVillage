import React, { Component, Fragment } from "react";
import {
  Container,
  Badge,
  Row,
  Nav,
  ButtonToolbar,
  Dropdown,
  DropdownButton,
  Navbar,
  Form,
  FormControl,
  Button
} from "react-bootstrap";

import { Link } from "react-router-dom";

import "../../CSS/AppCss.css";

import bg from "../../Assets/content/1.jpg";
import bg1 from "../../Assets/content/3.jpg";
import organiz from "../../Assets/bg/organiz.jpg";

const MidNavbar = props => {
  return (
    <Fragment>
      <Container style={{ widht: "100%", borderLeftWidth: "20px" }}>
        <Row style={{ height: "100%", width: "100%" }}>
          <div class="cards-list">
            <div class="card-shape 1" onClick={() => props.getByType("dog")}>
              <div class="card_image">
                <img src={bg1} />{" "}
              </div>
              <div class="card_title title-white">
                <h1>
                  <Badge variant="dark">Dogs</Badge>
                </h1>
              </div>
            </div>

            <div class="card-shape 2" onClick={() => props.getByType("cat")}>
              <div class="card_image">
                <img src={bg} />
              </div>
              <div class="card_title title-white">
                <h1>
                  <Badge variant="dark">Cats</Badge>
                </h1>
              </div>
            </div>

            <div class="card-shape 3">
              <div class="card_image">
                <img src={organiz} />
              </div>
              <div class="card_title">
                <h1>
                  <Badge variant="dark">Organization</Badge>
                </h1>
              </div>
            </div>
          </div>
        </Row>
      </Container>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="primary"
        style={{ paddingLeft: "200px", paddingRight: "200px" }}
      >
        <Navbar.Brand href="#home">
          <Button variant="outline-danger">
            <i class="far fa-heart"></i>&nbsp; My Favourite
          </Button>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <ButtonToolbar>
              <DropdownButton
                alignRight
                title="Select Type"
                id="dropdown-menu-align-right"
              >
                <Dropdown.Item eventKey="1">Cats</Dropdown.Item>
                <Dropdown.Item eventKey="2">Dogs</Dropdown.Item>
                <Dropdown.Item eventKey="3">Organization</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
              </DropdownButton>
            </ButtonToolbar>
          </Nav>
          <Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-4"
              />
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  );
};

export default MidNavbar;
