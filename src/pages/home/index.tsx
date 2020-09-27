import React, { useState, useCallback } from "react";
import { parse as parseCsv } from "papaparse";
import { Layout, UploadBox, DataTable } from "components";

const Home = () => {
  const [csvData, setCsvData] = useState<Array<unknown>>([]);
  const [loading, setLoading] = useState(false);

  const handleUploadFile = useCallback((file: File) => {
    setLoading(true);
    const reader: FileReader = new FileReader();

    reader.onload = () => {
      const csvContent = parseCsv(reader.result as string);
      setCsvData(csvContent?.data);
      setLoading(false);
    };

    reader.readAsText(file, "UTF-8");
  }, []);

  console.log(csvData);

  return (
    <Layout title="CSV Uploader">
      <UploadBox onChange={handleUploadFile} loading={loading} />
      <DataTable />
    </Layout>
  );
};

export default Home;
