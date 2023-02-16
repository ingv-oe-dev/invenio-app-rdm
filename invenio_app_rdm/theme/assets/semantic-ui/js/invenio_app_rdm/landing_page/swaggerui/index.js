import React from "react";
import ReactDOM from "react-dom";
import { QueryBuilder } from "./QueryBuilder";

const queryBuilderDiv = document.getElementById("query-builder");

if (queryBuilderDiv) {
    ReactDOM.render(
        <QueryBuilder apiui={queryBuilderDiv.dataset.apiui}/>,
        queryBuilderDiv
    );
}