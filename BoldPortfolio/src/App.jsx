import { Routes, Route } from 'react-router-dom'
import { LoginAdminPage, ControllerAdminPage } from './auth/pages';
import { GlobalPage } from "./user/pages/GlobalPage.jsx"

export function App() {
  return (
    <Routes>
      <Route
          path='/'
          element={<GlobalPage />}
        />

      <Route
          path='/login'
          element={<LoginAdminPage />}
        />

      <Route
          path='/controllerAdmin'
          element={<ControllerAdminPage />}
        />
        
        {/* Otras rutas */}
    </Routes>
  );
}