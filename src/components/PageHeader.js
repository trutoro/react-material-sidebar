import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Toolbar,
  Typography,
  Divider,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.secondary,
    display: "flex",
  },
  headerTitle: {
    fontWeight: 400,
    marginRight: theme.spacing(2),
  },
}));

const PageHeader = ({ title, children, style }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Box position='fixed' width='100%' zIndex={2}>
        <Toolbar
          variant='dense'
          className={classes.toolbar}
          style={{ ...style }}>
          {title && (
            <Typography variant='h6' noWrap className={classes.headerTitle}>
              {title}
            </Typography>
          )}
          {children}
        </Toolbar>
        <Divider />
      </Box>
      <Toolbar variant='dense' />
    </React.Fragment>
  );
};

export default PageHeader;

PageHeader.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  style: PropTypes.object,
};
