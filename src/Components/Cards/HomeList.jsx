import React, { Component, Fragment } from "react";
import { Card, CardDeck, Row, Alert } from "react-bootstrap";

import bg from "../../Assets/content/1.jpg";

class CardList extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <CardDeck>
          <Card>
            <Card.Img variant="top" src={bg} />
          </Card>
          <Card>
            <Card.Img variant="top" src={bg} />
          </Card>
          <Card>
            <Card.Img variant="top" src={bg} />
          </Card>
        </CardDeck>
      </Fragment>
    );
  }
}

export default CardList;
