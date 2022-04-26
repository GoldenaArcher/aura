import React, { FC } from 'react';
import { Alert } from '@mui/material';

// link to error constants
  // import errorOptions from'../../constants/errors'
    // Example Usage: <Error errorType={errorType.invalidPassword.errorText}/>

interface ITextInputProps {
  errorType?: string;
}

const Error: FC<ITextInputProps> = ({ errorType = '', ...rest }) => {

  return (
    <Alert
      className="alert-width"
      severity="error"
      sx={{ bgcolor: 'white', color: 'red' }}
    >
      {errorType}
    </Alert>
  );
};

export default Error;
