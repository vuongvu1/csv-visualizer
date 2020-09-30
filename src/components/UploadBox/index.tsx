import React, { useState } from "react";
import SC from "./styles";
import { Spinner, Check as CheckIcon } from "assets/icons";

interface Props {
  loading?: boolean;
  file?: File;
  onChange?: (file: File) => void;
}

const UploadBox: React.FC<Props> = ({ onChange, loading }) => {
  const [fileData, setFileData] = useState<File | null>(null);

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const csvFile = event.target.files?.[0];
    if (csvFile) {
      setFileData(csvFile);
      onChange?.(csvFile);
    }
  };

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
      <SC.UploadLabel htmlFor="file-id">
        Click to upload
        <br />
        (accept only .csv file)
      </SC.UploadLabel>
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
