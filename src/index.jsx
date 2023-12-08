/* @refresh reload */
import { render } from "solid-js/web";

import "./styles.css";
import "../netron/source/grapher.css";

import App from "./App";

render(() => <App />, document.getElementById("root"));
