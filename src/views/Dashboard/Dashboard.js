import React from "react";
import { Box } from "@material-ui/core";
import { PageBody, PageHeader } from "../../components";

const Dashboard = () => {
  return (
    <React.Fragment>
      <PageHeader title='Dashboard - Page Header' />
      <PageBody style={{ display: "flex" }}>
        <Box
          flexGrow='1'
          width='100%'
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'>
          <h1>Page Body</h1>
          <p>Page Body</p>
        </Box>
      </PageBody>
    </React.Fragment>
  );
};

export default Dashboard;
