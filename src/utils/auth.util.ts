import { LoginPayload } from '../stores/actions/auth.action';
import { AuthState } from './../stores/reducers/auth.reducer';

export const isAuthed = (auth: AuthState): boolean => {
  return auth.login.success;
};

export const authUser = async (loginPayload: LoginPayload) =>
  new Promise((resolve) => setTimeout(() => resolve(true), 2000));
