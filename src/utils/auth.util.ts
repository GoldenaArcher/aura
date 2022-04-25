import { AuthState } from './../stores/reducers/auth.reducer';

export const isAuthed = (auth: AuthState): boolean => {
  return auth.login.success;
};
