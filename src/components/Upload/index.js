import React from 'react';
import Dropzone from 'react-dropzone'

import { DropContainer, UploadMessage } from './styles';

function Upload() {


  function renderDragMessage(isDragActive, isDragReject) {
    if(!isDragActive){
      return <UploadMessage>Arraste arquivos aqui...</UploadMessage>
    }

    if(isDragReject) {
      return <UploadMessage type="error">Arquivo não suportado <span role="img" aria-label="sad"> 🙁</span></UploadMessage>
    }

    return <UploadMessage type="success">Solte os aquivos aqui <span role="img" aria-label="sad"> 😆</span></UploadMessage>
  }

  return (
    <Dropzone accept="image/*" onDropAccepted={() => false}>
      {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
        <DropContainer
          {...getRootProps()}
          isDragActive={isDragActive}
          isDragReject={isDragReject}
        >
          <input type="file" {...getInputProps()} />

          {renderDragMessage(isDragActive, isDragReject)}
        </DropContainer>
      )}
    </Dropzone>
  );
}

export default Upload;