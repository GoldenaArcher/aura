import React from 'react';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

type IErrorMsgType = {
  errorMsg: string;
};

const ErrorMsg = ({ errorMsg }: IErrorMsgType) => {
  return (
    <div className="flex error-msg">
      <span className="error-msg__icon">
        <ErrorOutlineIcon />
      </span>
      <span className="error-msg__text">{errorMsg}</span>
    </div>
  );
};

export default ErrorMsg;
