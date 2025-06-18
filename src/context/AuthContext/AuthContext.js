import { use } from "react";
import { createContext } from "react";

export const AuthContext = createContext(null);

export function useAuthContext() {
  return use(AuthContext);
}
