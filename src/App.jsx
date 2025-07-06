import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import ListaBeneficiarios from './components/ListaBeneficiarios';

const App = () => {
  const [beneficiarios, setBeneficiarios] = useState([]);
  const [beneficiarioEditando, setBeneficiarioEditando] = useState(null);

  useEffect(() => {
    const datosGuardados = JSON.parse(localStorage.getItem('beneficiarios')) || [];
    setBeneficiarios(datosGuardados);
  }, []);

  useEffect(() => {
    localStorage.setItem('beneficiarios', JSON.stringify(beneficiarios));
  }, [beneficiarios]);

  const agregarBeneficiario = (nuevo) => {
    setBeneficiarios([...beneficiarios, nuevo]);
  };

  const actualizarBeneficiario = (actualizado) => {
    const listaActualizada = beneficiarios.map((b) =>
      b.id === actualizado.id ? actualizado : b
    );
    setBeneficiarios(listaActualizada);
    setBeneficiarioEditando(null);
  };

  const eliminarBeneficiario = (id) => {
    const confirmacion = confirm('¿Estás seguro de eliminar este beneficiario?');
    if (confirmacion) {
      const listaFiltrada = beneficiarios.filter((b) => b.id !== id);
      setBeneficiarios(listaFiltrada);
    }
  };

  return (
    <div className="container p-4">
      <h1>Gestión de Beneficiarios</h1>
      <Formulario
        agregarBeneficiario={agregarBeneficiario}
        beneficiarioEditando={beneficiarioEditando}
        actualizarBeneficiario={actualizarBeneficiario}
      />
      <ListaBeneficiarios
        beneficiarios={beneficiarios}
        setBeneficiarioEditando={setBeneficiarioEditando}
        eliminarBeneficiario={eliminarBeneficiario}
      />
    </div>
  );
};

export default App;
import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import ListaBeneficiarios from './components/ListaBeneficiarios';

