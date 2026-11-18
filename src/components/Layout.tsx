import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Footer } from './Footer';

export function Layout() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Saltar al contenido principal
      </a>

      <Sidebar />

      <main id="main-content" className="content">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}