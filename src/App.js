import React from 'react'
import AppRouter from './routers/AppRouter'

/* Aquí importo el modulo de bootstrap5 */
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import { AuthProvider } from './context/AuthContext'

const App = () => {
  return (
    <>
      <AuthProvider>
        <AppRouter/>
      </AuthProvider>
    </>
  )
}

export default App
