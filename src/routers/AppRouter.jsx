import React, {useContext, useEffect} from 'react'
import { BrowserRouter as Router} from 'react-router-dom';
/* Importando authContex para poder redireccionar las rutas si el usuario esta logeado o no */
import { AuthContext } from '../context/AuthContext';

/* Importando las rutas privadas */
import PrivateRoutes from './PrivateRoutes';
/* Importando las rutas publicas */
import PublicRoutes from './PublicRoutes';

const AppRouter = () => {
  const {auth, verifyingToken} = useContext(AuthContext);

  /* Para mantenener una sesión activa apesar de refrescar la página */
  useEffect(() => {
    verifyingToken();
  }, [verifyingToken]);

  return (
         <Router>{auth.authStatus ? <PrivateRoutes /> : <PublicRoutes />}</Router>
  )
}

export default AppRouter;

// <Router>
//         {auth.authStatus ? (
//           <div>
//             {auth.role === "admin" ? <RutasPrivadas /> : <RutasPrivadas />}
//           </div>
//         ) : (
//           <RutasPublicas />
//         )}
//       </Router>