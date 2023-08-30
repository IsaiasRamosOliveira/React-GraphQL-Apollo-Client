import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Rotas from "./rotas";
import Apollo from "./Apollo";

const queryClient = new QueryClient();

function App() {
  return (
    <Apollo>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Rotas />
        </BrowserRouter>
      </QueryClientProvider>
    </Apollo>
  );
}

export default App;
