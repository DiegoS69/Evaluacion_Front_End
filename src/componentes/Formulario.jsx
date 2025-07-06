import React, { useState } from 'react';

const Formulario = ({ agregarBeneficiario }) => {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [fechaIngreso, setFechaIngreso] = useState('');
  const [observaciones, setObservaciones] = useState('');
  const [tipoAyuda, setTipoAyuda] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevo = {
      id: Date.now(),
      nombre,
      edad: Number(edad),
      fechaIngreso,
      observaciones,
      tipoAyuda
    };
    agregarBeneficiario(nuevo);
    setNombre('');
    setEdad('');
    setFechaIngreso('');
    setObservaciones('');
    setTipoAyuda('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="number"
        placeholder="Edad"
        value={edad}
        onChange={(e) => setEdad(e.target.value)}
      />
      <input
        type="date"
        value={fechaIngreso}
        onChange={(e) => setFechaIngreso(e.target.value)}
      />
      <select value={tipoAyuda} onChange={(e) => setTipoAyuda(e.target.value)}>
        <option value="">Seleccione</option>
        <option value="Alimentación">Alimentación</option>
        <option value="Salud">Salud</option>
        <option value="Educación">Educación</option>
      </select>
      <textarea
        placeholder="Observaciones"
        value={observaciones}
        onChange={(e) => setObservaciones(e.target.value)}
      ></textarea>
      <button type="submit">Agregar</button>
    </form>
  );
};

export default Formulario;
