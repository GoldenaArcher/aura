// pseudo error data
let errorOptions = {
  accountLocked: {
    id: '1',
    errorText: {
      1: 'Your account has been locked because of consecutive failed login attempts. Please try again in 1 minute.',
      30: 'Your account has been locked because of consecutive failed login attempts. Please try again in 30 minutes.',
    },
  },
  invalidCredentials: {
    id: '2',
    errorText: {
      1: 'Invalid Credentials. Attempts Remaining: 1',
      2: 'Invalid Credentials. Attempts Remaining: 2',
    },
  },
  userInactive: {
    id: '3',
    errorText: 'User is inactive. Please contact the Admin.',
  },
  invalidEmail: {
    id: '4',
    errorText: 'Email ID does not exist.',
  },
  invalidPassword: {
    id: '5',
    errorText: 'Passwords do not match',
  },
};

export default errorOptions;
