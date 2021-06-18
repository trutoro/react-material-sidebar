import React from "react";
import { Box } from "@material-ui/core";
import { PageBody, PageHeader } from "../../components";

const Posts = () => {
  return (
    <React.Fragment>
      <PageHeader title='All Posts' />
      <PageBody style={{ display: "flex" }}>
        <Box
          flexGrow='1'
          width='100%'
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'>
          <h1>Page Body</h1>
          <p>Nested page with routes</p>
        </Box>
      </PageBody>
    </React.Fragment>
  );
};

export default Posts;
