import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import AuthLayout from "./modules/AuthLayout";
import { GlobalStyle } from "./style/GlobalStyle";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <AuthLayout>
          <AppRoutes />
        </AuthLayout>
      </BrowserRouter>
    </>
  );
};

export default App;
