import React from "react";
import PropTypes from "prop-types";
import { Spinner, Routes } from ".";

const RoutesWithLayout = ({ layout: Layout, routes, LayoutProps }) => {
  return (
    <Layout {...LayoutProps}>
      <React.Suspense fallback={<Spinner />}>
        <Routes routes={routes} />
      </React.Suspense>
    </Layout>
  );
};

export default RoutesWithLayout;

RoutesWithLayout.propTypes = {
  layout: PropTypes.func,
  routes: PropTypes.arrayOf(PropTypes.object),
  LayoutProps: PropTypes.object,
};
