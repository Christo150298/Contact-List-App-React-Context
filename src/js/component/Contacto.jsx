import React from "react";
import useAppContext from "../store/AppContext.js";
import TarjetaContacto from "./TarjetaContacto.jsx";
import CrearAgenda from "./CrearAgenda.jsx";

const Contacto = () => {

  const {store, actions} =useAppContext();

  return (
    <div className="d-flex justify-content-center">
      {!store.contactList
        ? <CrearAgenda />
        : store.contactList.length !== 0 
          ? <ul className="list-group">{store.contactList.map((item,index) => <TarjetaContacto item={item} key={index} id={item.id} />)}</ul>
          : <img src="https://gifdb.com/images/high/walking-bear-loading-walk-mjmobhdpwc1toy09.gif" />
        }
    </div>
  );
};

export default Contacto;