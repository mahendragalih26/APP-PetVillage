import React, { Component, Fragment } from "react";

import NavbarTop from "../../Components/Navbars/TopNavbar.jsx";
import HCarousel from "../../Components/Carousel/HomeCarousel.jsx";
// import dotenv from "dotenv";

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
      animals: []
    };
  }

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
  };

  render() {
    console.log("isi Tokennya ", this.state.myToken);
    console.log("my animals  ", this.state.animals);
    console.log("my env  ", process.env);
    return (
      <Fragment>
        <NavbarTop />
        <HCarousel />
      </Fragment>
    );
  }
}

export default myHome;
