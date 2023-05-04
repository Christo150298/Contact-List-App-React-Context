import React from "react";
import { useNavigate } from "react-router";
import useAppContext from "../store/AppContext.js";

const AñadirContacto = () => {

  const navigate = useNavigate();

  const {store, actions} = useAppContext();

  return (
    <form>
      <legend className="text-center fs-2 fw-bold">Añadir Nuevo Contacto</legend>
      <div className="mb-3">
        <label htmlFor="exampleInputFullName" className="form-label">
          Nombre Completo
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputFullName"
          placeholder="Nombre Completo"
          value={store.name}
          onChange={(e) => actions.setName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail"
          placeholder="Enter email"
          value={store.email}
          onChange={(e) => actions.setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPhone" className="form-label">
          Teléfono
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputPhone"
          placeholder="Enter phone"
          value={store.phone}
          onChange={(e) => actions.setPhone(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputAddress" className="form-label">
          Direccion
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputAddress"
          placeholder="Enter address"
          value={store.address}
          onChange={(e) => actions.setAddress(e.target.value)}
        />
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary" onClick={(e) => {actions.handleClickSave(e, store.name, store.email, store.phone, store.address); navigate("/");}}>
          Guardar Contacto
        </button>
        <button className="col-2 btn btn-danger mt-3" onClick={(e) => {actions.handleHomeAndReset(e); navigate("/");}}>
          Volver a contactos
        </button>
      </div>
    </form>
  );
};

export default AñadirContacto;