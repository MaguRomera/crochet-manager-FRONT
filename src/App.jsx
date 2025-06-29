import { Routes, Route } from 'react-router-dom';
import { Home } from './routes/Home';
import {Stock}  from './routes/Stock';
import {CargaStock} from './routes/CargaStock';
import { Cuentavueltas } from './routes/Cuentavueltas';
import { EditarHilado } from './routes/EdicionHilado';
import '../src/styles/App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/stock" element={<Stock />} />
      <Route path="/carga-stock" element={<CargaStock />} />
      <Route path="/editar-stock/:id" element={<EditarHilado />} />
    </Routes>
  );
}

export default App;


