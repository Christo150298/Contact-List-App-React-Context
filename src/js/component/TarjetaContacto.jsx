import React from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal.jsx";
import "../../styles/index.css"

const TarjetaContacto = (props) => {

  return (
    <li className="list-group-item">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://thumbs.dreamstime.com/b/icono-de-tel%C3%A9fono-vectorial-avatar-perfil-persona-masculina-con-s%C3%ADmbolo-para-contacto-negocios-y-comunicaci%C3%B3n-en-color-plano-145875162.jpg"
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title fs-2 mb-3">{props.item.full_name}</h5>
              <p className="card-text fs-4">
                <i className="fa-solid fa-location-dot me-2"></i>
                {props.item.address}
              </p>
              <p className="card-text fs-5">
                <i class="fa-solid fa-mobile-screen-button me-3"></i>
                {props.item.phone}
              </p>
              <p className="card-text fs-6">
                <i className="fa-solid fa-envelope me-3"></i>
                {props.item.email}
              </p>
            </div>
          </div>
          <div className="col-md-1 mt-3">
            <button className="button-style">
              <Link to={"/update/" + props.id}>
                <i className="fa-solid fa-pencil"></i>
              </Link>
            </button>
          </div>
          <div className="col-md-1 mt-3">
            <button className="button-style">
              <i className="fa-solid fa-trash-can" data-bs-toggle="modal" data-bs-target={`#modal-${props.id}`}></i>
              <Modal id={props.id} />
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default TarjetaContacto;