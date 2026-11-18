import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { SobreMi } from './pages/SobreMi';
import { Habilidades } from './pages/Habilidades';
import { Proyectos } from './pages/Proyectos';
import { Contacto } from './pages/Contacto';
import { NotFound } from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<SobreMi />} />
        <Route path="sobre-mi" element={<SobreMi />} />
        <Route path="habilidades" element={<Habilidades />} />
        <Route path="proyectos" element={<Proyectos />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}