import React from "react";
import PropTypes from "prop-types";
import { Routes } from "../../components";

const PostsRoutes = ({ routes }) => {
  return <Routes routes={routes} />;
};

export default PostsRoutes;

PostsRoutes.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object),
};
