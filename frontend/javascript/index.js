import "normalize.css";
import "typeface-montserrat";
import "../styles/index.scss";

import { Application } from "stimulus";
import { definitionsFromContext } from "stimulus/webpack-helpers";

const application = Application.start();
const context = require.context("./controllers", true, /_controller\.js$/);
application.load(definitionsFromContext(context));
