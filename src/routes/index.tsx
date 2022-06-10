import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import AuthRoutes from "./auth.routes";


function Routes() {

    return (
      <NavigationContainer>
           <AuthRoutes/>
      </NavigationContainer>
    );
  }


  export default Routes;