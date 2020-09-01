import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

import { Container } from "@material-ui/core";

const DataUploader = ({ error, action }) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      acceptedFiles.forEach((file) => {
        const reader = new FileReader();

        reader.onabort = () => error("file reading was aborted");
        reader.onerror = () => error("file reading has failed");
        reader.onload = () => {
          try {
            const data = JSON.parse(reader.result);
            action(data);
          } catch (e) {
            error("Failed to parse file. Make sure it is a JSON file");
            return;
          }
        };
        reader.readAsText(file);
      });
    },
    [error, action]
  );
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <Container className="dropzone" {...getRootProps()}>
      <h1>JSON Upload</h1>
      <input {...getInputProps()} />
      <p style={{ textAlign: "center" }}>
        Drag 'n' drop some a file here, or click to select a file
      </p>
    </Container>
  );
};

export default DataUploader;
