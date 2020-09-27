import React from "react";
import { Layout, UploadBox, DataTable } from "components";

const Home = () => {
  return (
    <Layout title="CSV Uploader">
      <UploadBox />
      <DataTable />
    </Layout>
  );
};

export default Home;
