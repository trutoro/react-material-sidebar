import React from "react";
import { CircularProgress, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const Spinner = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CircularProgress thickness={4} size={100} color='primary' />
    </div>
  );
};

export default Spinner;
