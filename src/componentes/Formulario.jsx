import React, { useState, useEffect } from 'react';

const Formulario = ({ agregarBeneficiario, beneficiarioEditando, actualizarBeneficiario }) => {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [fechaIngreso, setFechaIngreso] = useState('');
  const [observaciones, setObservaciones] = useState('');
  const [tipoAyuda, setTipoAyuda] = useState('');
  const [errores, setErrores] = useState({});

  useEffect(() => {
    if (beneficiarioEditando) {
      setNombre(beneficiarioEditando.nombre);
      setEdad(beneficiarioEditando.edad);
      setFechaIngreso(beneficiarioEditando.fechaIngreso);
      setObservaciones(beneficiarioEditando.observaciones);
      setTipoAyuda(beneficiarioEditando.tipoAyuda);
    }
  }, [beneficiarioEditando]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const datos = {
      id: beneficiarioEditando ? beneficiarioEditando.id : Date.now(),
      nombre,
      edad: Number(edad),
      fechaIngreso,
      observaciones,
      tipoAyuda
    };

    beneficiarioEditando ? actualizarBeneficiario(datos) : agregarBeneficiario(datos);

    setNombre('');
    setEdad('');
    setFechaIngreso('');
    setObservaciones('');
    setTipoAyuda('');
    setErrores({});
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        {errores.nombre && <small>{errores.nombre}</small>}
      </div>

      <div>
        <label>Edad:</label>
        <input
          type="number"
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
        />
        {errores.edad && <small>{errores.edad}</small>}
      </div>

      <div>
        <label>Fecha de ingreso:</label>
        <input
          type="date"
          value={fechaIngreso}
          onChange={(e) => setFechaIngreso(e.target.value)}
        />
        {errores.fechaIngreso && <small>{errores.fechaIngreso}</small>}
      </div>

      <div>
        <label>Tipo de ayuda:</label>
        <select value={tipoAyuda} onChange={(e) => setTipoAyuda(e.target.value)}>
          <option value="">Seleccione</option>
          <option value="Alimentación">Alimentación</option>
          <option value="Salud">Salud</option>
          <option value="Educación">Educación</option>
        </select>
        {errores.tipoAyuda && <small>{errores.tipoAyuda}</small>}
      </div>

      <div>
        <label>Observaciones:</label>
        <textarea
          value={observaciones}
          onChange={(e) => setObservaciones(e.target.value)}
        ></textarea>
        {errores.observaciones && <small>{errores.observaciones}</small>}
      </div>

      <button type="submit">
        {beneficiarioEditando ? 'Actualizar' : 'Agregar'} Beneficiario
      </button>
    </form>
  );
};

export default Formulario;

