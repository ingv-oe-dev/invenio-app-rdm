
import React, { Component } from "react";
import { Container, Message } from "semantic-ui-react";
import { QueryBuilderButton } from "./QueryBuilderButton"

export class QueryBuilder extends Component {
  constructor(props) {
    super(props);
    this.apiui = this.props.apiui;
    this.state = {
      error: null,
    };
  }
  handleError = async (errorMessage) => {
    console.log(errorMessage);
    this.setState({error: errorMessage})
  };

  errorMessage = () => {
    return <Message negative>
      <p>An error occurred fetching new TSD system token </p>
    </Message>;
  };

  render() {
    const error = this.state.error;
    return (
      <Container>
        {error ? this.errorMessage() : null}
        <QueryBuilderButton
          content='Click Here'
          apiui={this.apiui}
          onError={this.handleError}
        />
      </Container>
    );
  }
}
