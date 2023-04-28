import React from "react";
import useAppContext from "../store/AppContext.js";

const CrearAgenda = () => {

  const {store, actions} = useAppContext();

  return (
    <form>
      <div className="mt-5">
        <label htmlFor="nombreAgenda" className="form-label d-flex justify-content-center">
          Nombre Agenda Nueva:
        </label>
        <input
          type="text"
          className="form-control d-flex justify-content-center"
          id="nombreAgenda"
          aria-describedby="nameHelp"
          value={store.nombreAgenda}
          onChange={(e) => actions.setNombreAgenda(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary d-flex mx-auto mt-3" onClick={(e) => actions.handleCREARAgenda(e,store.nombreAgenda)}>
        Crear Agenda
      </button>
    </form>
  );
};

export default CrearAgenda;