import { createContext } from "react";
import { UsuarioDTO } from "../dtos/UsuarioDTO";


interface IAuthContext{
    usuario: UsuarioDTO | null;
    login(): Promise<void>;
    logout(): Promise<void>;
}

export const AuthContext = createContext({} as IAuthContext);