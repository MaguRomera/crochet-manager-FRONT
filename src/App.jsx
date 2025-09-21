import { Routes, Route } from 'react-router-dom';
import { Home } from './routes/Home';
import {Stock}  from './routes/Stock';
import {CargaStock} from './routes/CargaStock';
import { EditarHilado } from './routes/EdicionHilado';
import { Proyecto } from './routes/Proyecto';
import { CargaProyecto } from './routes/CargaProyecto';
import { EditarProyectoDetalles } from './routes/EdiciónProyecto-Detalles';
import { ProyectoNotas } from './routes/Proyecto-Notas';
import { Cuentavueltas } from './routes/Cuentavueltas';
import '../src/styles/App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/stock" element={<Stock />} />
      <Route path="/carga-stock" element={<CargaStock />} />
      <Route path="/editar-stock/:id" element={<EditarHilado />} />
      <Route path="/proyecto" element={<Proyecto />} />
      <Route path="/carga-proyecto" element={<CargaProyecto />} />
      <Route path="/proyecto-detalles/:id" element={<EditarProyectoDetalles />} />
      <Route path="/proyecto-notas/:id" element={<ProyectoNotas />} />
      <Route path="/cuentavueltas/:id" element={<Cuentavueltas />} />
    </Routes>
  );
}

export default App;


