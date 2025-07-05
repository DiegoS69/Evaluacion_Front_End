import React from 'react';
import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import ListaBeneficiarios from './components/ListaBeneficiarios';

const App = () => {
  return (
    <div className="container p-4">
      <h1>Gestión de Beneficiarios</h1>
    </div>
  )
  const [beneficiarios, setBeneficiarios] = useState([]);

  useEffect(() => {
    const datosGuardados = JSON.parse(localStorage.getItem('beneficiarios')) || [];
    setBeneficiarios(datosGuardados);
  }, []);

  useEffect(() => {
    localStorage.setItem('beneficiarios', JSON.stringify(beneficiarios));
  }, [beneficiarios]);

  return (
    <div className="container p-4">
      <h1>Gestión de Beneficiarios</h1>
      <Formulario />
      <ListaBeneficiarios beneficiarios={beneficiarios} />
    </div>
  );
};




export default App;
import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import ListaBeneficiarios from './components/ListaBeneficiarios';

