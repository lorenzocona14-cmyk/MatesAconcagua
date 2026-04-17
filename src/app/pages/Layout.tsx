import { Outlet } from 'react-router';
import { Header } from '../components/Header';
import ChatWidget from '../components/ui/ChatWidget'; // <-- 1. Agrega esta importación

export function Layout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Outlet />
      </main>
      <footer className="bg-green-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg mb-2">🧉 Mates Aconcagua - La tradición en tus manos</p>
          <p className="text-sm text-green-200">
            © 2026 Mates Aconcagua. Todos los derechos reservados.
          </p>
        </div>
      </footer>
      
      <ChatWidget /> {/* <-- 2. Coloca el widget justo antes de cerrar el div principal */}
      
    </div>
  );
}
