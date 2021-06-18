import React from "react";
import { Box } from "@material-ui/core";
import { PageBody } from "../../components";

const Users = () => {
  return (
    <React.Fragment>
      <PageBody style={{ display: "flex" }}>
        <Box
          flexGrow='1'
          width='100%'
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'>
          <h1>Page Body</h1>
          <p>Page without header</p>
        </Box>
      </PageBody>
    </React.Fragment>
  );
};

export default Users;
