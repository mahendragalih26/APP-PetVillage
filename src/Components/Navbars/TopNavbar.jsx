import React, { Component, Fragment } from "react";
import {
  Container,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button
} from "react-bootstrap";

import Swal from "sweetalert2";

import { Link } from "react-router-dom";

const NavbarTop = props => {
  // function logOut()  {
  //   Swal.fire({
  //     title: 'Are you sure?',
  //     text: "You won't be able to revert this!",
  //     type: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Yes, delete it!'
  //   }).then((result) => {
  //     if (result.value) {
  //       Swal.fire(
  //         'Deleted!',
  //         'Your file has been deleted.',
  //         'success'
  //       )
  //     }
  //   }
  // }

  const logOut = () => {
    Swal.fire({
      title: "Anda Yakin ingin LogOut?",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: '<i class="fas fa-power-off"></i> LogOut'
    }).then(result => {
      if (result.value) {
        localStorage.clear();
        Swal.fire("LogOut!", "Anda Berhasil LogOut.", "success");
      }
    });
  };

  return (
    <Fragment>
      <div>
        <Navbar
          bg="dark"
          variant="dark"
          style={{
            // backgroundColor: "#000",
            opacity: "0.8",
            width: "70%",
            left: "15%",
            right: "25%",
            textAlign: "center",
            zIndex: "20",
            top: "10px",
            height: "60px",
            borderRadius: "20px"
          }}
          fixed="top"
        >
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
          <Form inline>
            <Link style={{ textDecoration: "none" }}>
              <div
                style={{
                  fontSize: "20px",
                  color: "white"
                }}
              >
                <i class="far fa-user"></i>
                &nbsp;
                {localStorage.getItem("name")}&nbsp;
              </div>
            </Link>
          </Form>
          <Form inline>
            <Link style={{ textDecoration: "none" }}>
              <div
                style={{
                  fontSize: "20px",
                  color: "white"
                }}
                onClick={logOut}
              >
                | Logout
              </div>
            </Link>
          </Form>
        </Navbar>
      </div>
    </Fragment>
  );
};

export default NavbarTop;
