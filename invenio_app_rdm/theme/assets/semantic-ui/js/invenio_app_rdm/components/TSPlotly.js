import React from "react";
import Plot from "react-plotly.js";
import PropTypes from "prop-types";

export const TSPlotly = ({ tsdata }) => {
  return (
    <Plot
      data={[
        {
          x: tsdata.dt,
          y: tsdata.v,
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
};

TSPlotly.propTypes = {
  tsdata: PropTypes.object.isRequired,
};
