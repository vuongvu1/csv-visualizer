import React, { useState } from "react";
import { Layout, UploadBox, DataTable } from "components";

const Home = () => {
  const [file, setFile] = useState<File | undefined>(undefined);

  const handleUploadFile = (uploaded: File) => {
    // Simulate upload progress to server
    setTimeout(() => {
      setFile(uploaded);
    }, 4000);
  };

  return (
    <Layout title="CSV Uploader">
      <UploadBox onChange={handleUploadFile} file={file} />
      <DataTable />
    </Layout>
  );
};

export default Home;
