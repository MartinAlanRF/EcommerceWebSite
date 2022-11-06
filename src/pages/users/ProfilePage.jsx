import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

import Title from "../../components/Title";

const ProfilePage = () => {
  const { auth } = useContext(AuthContext);
  console.log(auth.rol)
  return (
    <>
      <Title titulo="Perfil" />

      <div className="col-lg-10 col-md-8 col-sm-12 ms-auto me-auto mb-3">
        <div className="card">
          <div className="card-body">
            <div className="d-flex flex-column align-items-center text-center">
              <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width={150} />
              <div className="mt-3">
                <h4>{auth.name}  {auth.lastName}</h4>
                <p className="text-secondary mb-1">{auth.userName}</p>
                <p className="text-secondary mb-1">{auth.rol}</p>
                <p className="text-muted font-size-sm">{auth.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default ProfilePage;