import React, { Component, Fragment } from "react";
import Swal from "sweetalert2";

import { connect } from "react-redux";

import { getAnimals } from "../../Publics/Redux/Actions/Animals";

import NavbarTop from "../../Components/Navbars/TopNavbar.jsx";
import NavbarMid from "../../Components/Navbars/MidNavbar.jsx";
import HCarousel from "../../Components/Carousel/HomeCarousel.jsx";
import CardList from "../../Components/Cards/HomeList.jsx";

import { myPagination } from "../../Publics/Redux/Actions/Animals";

import { Client } from "@petfinder/petfinder-js";
const client = new Client({
  apiKey: process.env.REACT_APP_API_KEY,
  secret: process.env.REACT_APP_SECRET_KEY
});

class myHome extends Component {
  constructor() {
    super();
    this.state = {
      myToken: "",
      expired: "",
      animalsData: [],
      search: "",
      isLoading: false
    };
  }

  handleChange = e => {
    const value = e.target.value;
    this.setState({
      search: value
      // search: target
    });
    console.log("ini searchnya = ", this.state.search);
  };

  nextPage = link => {
    this.props.dispatch(myPagination(link)).then(() => {
      this.setState({
        animalsData: this.props.animals.allAnimals
      });
    });
  };

  componentDidMount = async () => {
    await this.props
      .dispatch(getAnimals())
      .then(() => {
        this.setState({
          animalsData: this.props.animals.allAnimals,
          isLoading: this.props.animals.isLoading
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
    console.log("isi Tokennya ", this.state.myToken);
    console.log("my animals  ", this.state.animalsData);
    console.log("my env  ", process.env);
    console.log("my loading  ", this.state.loading);
    console.log("session = ", this.state.session);
    return (
      <Fragment>
        <NavbarTop handleChange={this.handleChange} />
        <HCarousel />
        <NavbarMid />
        <div style={{ backgroundColor: "#efeef1", paddingTop: "20px" }}>
          <CardList
            dataAnimals={this.state.animalsData}
            search={this.state.search}
            nextPage={this.nextPage}
          />
        </div>
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

export default connect(mapStateToProps)(myHome);
