import React, { useState, useCallback } from "react";
import { parse as parseCsv } from "papaparse";
import { Layout, UploadBox, DataTable } from "components";

const Home = () => {
  const [csvData, setCsvData] = useState<Array<string[]>>([]);
  const [loading, setLoading] = useState(false);

  const handleUploadFile = useCallback((file: File) => {
    setLoading(true);
    const reader: FileReader = new FileReader();

    reader.onload = () => {
      const csvContent = parseCsv(reader.result as string);
      setCsvData(csvContent?.data as Array<string[]>);
      setLoading(false);
    };

    reader.readAsText(file, "UTF-8");
  }, []);

  return (
    <Layout title="CSV Visualizer">
      <UploadBox onChange={handleUploadFile} loading={loading} />
      <DataTable data={csvData} />
    </Layout>
  );
};

export default Home;
