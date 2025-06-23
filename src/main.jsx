import { useContext } from "react";
import { CrochetContextProvider } from "./contexts/crochet-manager-context"; // ← ajustá esta ruta si hace falta
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
 

ReactDOM.createRoot(document.getElementById('root')).render(
  <CrochetContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </CrochetContextProvider>
);
