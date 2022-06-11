import { NavigationContainer } from "@react-navigation/native";
import React, { useContext } from "react";
import { AuthContext } from "../context/authContext";
import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";


function Routes() {
 
    const { usuario } = useContext(AuthContext);
    return (
      <NavigationContainer>
           { usuario ? (<AppRoutes/>)  : (<AuthRoutes/>) } 
      </NavigationContainer>
    );
  }


  export default Routes;