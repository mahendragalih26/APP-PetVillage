import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import { Pagination, Navbar } from "react-bootstrap";

class homePagination extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(" isi props di page = ", this.props);
    let page = this.props.pages;
    return (
      <Fragment>
        {page !== undefined ? (
          <>
            <Navbar
              // bg="dark"
              variant="dark"
              style={{
                left: "40%",
                right: "40%",
                textAlign: "center",
                zIndex: "20"
              }}
              fixed="bottom"
            >
              <Pagination size="lg" style={{ width: "100%" }}>
                <>
                  {this.props.pages._links.previous !== undefined ? (
                    <Pagination.Prev
                      onClick={() => {
                        console.log(
                          "aaaa",
                          this.props.pages._links.previous.href
                        );
                        this.props.nextPage(
                          this.props.pages._links.previous.href
                        );
                      }}
                    />
                  ) : (
                    <Pagination.Prev disabled />
                  )}
                </>
                <Pagination.Item active={true}>
                  {page.current_page || "-"}
                </Pagination.Item>
                {this.props.pages._links.next !== undefined ? (
                  <Pagination.Next
                    onClick={() => {
                      console.log("aaaa2", this.props.pages._links.next.href);
                      this.props.nextPage(this.props.pages._links.next.href);
                      // this.nextPage(this.props.pages._links.next.href);
                    }}
                  />
                ) : (
                  <Pagination.Next disabled />
                )}
              </Pagination>
            </Navbar>
          </>
        ) : null}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  console.log("ini state di home page = ", state);
  return {
    animals: state.Animals
  };
};

export default connect(mapStateToProps)(homePagination);
