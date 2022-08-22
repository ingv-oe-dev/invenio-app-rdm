import React, { Component } from "react";
import Plot from "react-plotly.js";
import axios from "axios";
import PropTypes from "prop-types";

export class Plotly extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dt: [],
      v: [],
    };
  }

  componentDidMount() {
    const { chartresource } = this.props;
    const { tsdtoken } = this.props;
    const { tsdsrvurl } = this.props;

    axios({
      url: tsdsrvurl + "/timeseries/values",
      method: "get",
      headers: {
        Authorization: tsdtoken,
      },
      params: {
        request: {
          id: chartresource[0].id,
          // TO ADD other Parameteres for preview
        },
      },
    })
      .then((response) => {
        const datas = response.data;
        this.setState({
          dt: datas.data.Datetime, //datas.data.Datetime.map((x) => x * 1000),
          v: datas.data.Value,
        });
      })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log("Error response.data: \n" + error.response.data);
          console.log("Error response.status: \n" + error.response.status);
          console.log("Error response.headers: \n" + error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request`
          console.log("Error response.request: \n" + error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
      })
      .then(function () {
        // always executed
      });
  }

  componentDidCatch(error) {
    console.error(error);
  }

  render() {
    return (
      <Plot
        data={[
          {
            x: this.state.dt,
            y: this.state.v,
            type: "scatter",
            mode: "lines",
            line: { color: "#bd0a27" },
          },
        ]}
        layout={{
          autosize: true,
          title: "Time Series",
          xaxis: {
            autorange: true,
            type: "date",
          },
          yaxis: {
            autorange: true,
            type: "linear",
          },
        }}
        useResizeHandler
        style={{ width: "100%", height: "100%" }}
      />
    );
  }
}

Plotly.propTypes = {
  chartresource: PropTypes.array.isRequired,
  tsdtoken: PropTypes.string.isRequired,
  tsdsrvurl: PropTypes.string.isRequired,
};
