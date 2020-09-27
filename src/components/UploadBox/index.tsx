import React, { useState, useEffect } from "react";
import SC from "./styles";
import { Spinner, Check as CheckIcon } from "assets/icons";

interface Props {
  file?: File;
  onChange?: (file: File) => void;
}

const UploadBox: React.FC<Props> = ({ file, onChange }) => {
  const [fileData, setFileData] = useState<File | undefined>(file);
  const [loading, setLoading] = useState<boolean>(false);

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const csvFile = event.target.files?.[0];
    if (csvFile) {
      setLoading(true);
      setFileData(csvFile);
      onChange?.(csvFile);
    }
  };

  useEffect(() => {
    if (file) {
      setFileData(file);
      setLoading(false);
    }
  }, [file]);

  return (
    <SC.Container>
      {fileData && (
        <SC.UploadedFile>
          <SC.IconAndLabel>
            <SC.FileIcon />
            {fileData.name} ({fileData.size})
          </SC.IconAndLabel>
          {loading ? <Spinner /> : <CheckIcon />}
        </SC.UploadedFile>
      )}
      <SC.Label htmlFor="file-id">
        Press to upload
        <br />
        (Accept only .csv file)
      </SC.Label>
      <SC.FileInput
        id="file-id"
        type="file"
        accept=".csv"
        onChange={onInputChange}
      />
    </SC.Container>
  );
};

export default UploadBox;
