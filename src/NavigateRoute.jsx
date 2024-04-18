import React from "react";
import { Link } from "react-router-dom";
export default function NavigateRoute(props) {
  return <Link to={props.to}>{props.text}</Link>;
}
