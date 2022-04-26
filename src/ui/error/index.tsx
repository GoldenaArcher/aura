import React, { FC } from 'react';
import { Alert } from '@mui/material';

import { useSelector } from 'react-redux';
// import { changeText, clearText } from '../../stores/actions/error.action';
import { AppState } from '../../stores/reducers';
import { ErrorState } from '../../stores/reducers/error.reducer';

// link to error constants
  // import errorOptions from'../../constants/errors'
    // Example Usage: <Error errorType={errorType.invalidPassword.errorText}/>

// import { changeText, clearText } from '../../stores/actions/error.action';
// import { useDispatch } from 'react-redux';
  // Redux dispatch methods
    // dispatch(changeText(errorOptions.invalidPassword.errorText))
    // dispatch(clearText())

interface ITextInputProps {
  errorType?: string;
}

const Error: FC<ITextInputProps> = ({ errorType = '', ...rest }) => {
  const error = useSelector<AppState, ErrorState>((state) => state.error);
  console.log(error);
  // const dispatch = useDispatch()

  return (
    <Alert
      className="alert-width"
      severity="error"
      sx={{ bgcolor: 'white', color: 'red' }}
    >
      {error.errorText}
    </Alert>
  );
};

export default Error;
