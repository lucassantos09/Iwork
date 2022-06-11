import React, { ReactNode, useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/authContext";
import { UsuarioDTO } from "../dtos/UsuarioDTO";

interface AuthProviderProps{
    children: ReactNode;
}


function AuthProvider({children}: AuthProviderProps) {
    const [usuario, setUsuario] = useState<UsuarioDTO | null >(null);




    async function login(){

        setUsuario({
            login : "teste",
            nome : "teste nome"
        });
              
    }

    async function logout(){
        setUsuario(null)
    }


    

    return (
        <AuthContext.Provider value={{
            usuario,
            login,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}


function useAuth(){
    const context = useContext(AuthContext);
    return context;
}

export {AuthProvider, useAuth};