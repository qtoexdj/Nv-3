import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './redireccion/AuthContext'
import { RoleBasedRedirect } from './redireccion/RoleBasedRedirect'
import Login from './Login'
import { InicioAdmin } from './admin/inicioadmin'
import { InicioUser } from './user/iniciouser'
import { InicioDev } from './dev/iniciodev'
import './style.css'

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<InicioAdmin />} />
          <Route path="/user" element={<InicioUser />} />
          <Route path="/dev" element={<InicioDev />} />
          <Route path="*" element={<RoleBasedRedirect />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
)
