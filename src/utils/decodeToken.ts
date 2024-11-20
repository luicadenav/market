import { jwtDecode } from "jwt-decode";
import { Settings, DateTime } from "luxon";
import { TokenFirebase } from "../interfaces/firebase.interfaces";

export const tokenDecode = <T>(token: string) => {
  const createDecode: T = jwtDecode(token);
  return createDecode;
};

export const expirationTokenAuth = (token: string): boolean => {
  Settings.defaultZone = "America/Bogota";
  Settings.defaultLocale = "es";
  const { exp } = tokenDecode<TokenFirebase>(token);
  const now = DateTime.now().toMillis();

  return exp * 1000 <= now;
};
