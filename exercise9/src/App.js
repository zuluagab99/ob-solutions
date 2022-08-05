import React, { useState, useEffect } from 'react';
import './App.css';
import ContactComponent from './components/contactComponent';
import ContactForm from './components/contactForm';


function App() {
  const defaultContact = [
    { nombre: 'Alejandro', email: 'pepito@mazacuata.com', conectado: 'true' },
    { nombre: 'Maria', email: 'maria@mazacuata.com', conectado: 'false' },
  ];

  const [nuevoContacto, setNuevoContacto] =useState(defaultContact);

  function changeState(contacto) {
    const index = nuevoContacto.indexOf(contacto);
    const tempContact = [...nuevoContacto];

    tempContact[index].estado = !tempContact[index].estado;
    setNuevoContacto(tempContact); 
  }

  function remove(contacto) {
    const index = nuevoContacto.indexOf(contacto);
    const tempContact = [...nuevoContacto];
    tempContact.splice(index, 1);
    setNuevoContacto(tempContact);
  }

  function addContact(contacto) {
    const index = nuevoContacto.indexOf(contacto);
    const tempContact = [...nuevoContacto];
    tempContact.push(contacto);
    setNuevoContacto(tempContact);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Contactos</h1>

        <div className="card-container">
          {nuevoContacto.map((contacto, index) => {
            return(
              <ContactComponent key={index} contacto={contacto} changeState={changeState} remove={remove} />
                );
              }
            )
          }
        </div>
        
        <ContactForm onAddContact={addContact}></ContactForm>

      </header>
    </div>
  );
}

export default App;
