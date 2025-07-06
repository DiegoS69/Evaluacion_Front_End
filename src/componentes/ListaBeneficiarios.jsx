import React from 'react';

const ListaBeneficiarios = ({ beneficiarios, setBeneficiarioEditando, eliminarBeneficiario }) => {
  return (
    <div>
      <h2>Listado de Beneficiarios</h2>
      {beneficiarios.length === 0 ? (
        <p>No hay beneficiarios registrados.</p>
      ) : (
        <ul>
          {beneficiarios.map((b) => (
            <li key={b.id} style={{ marginBottom: '10px' }}>
              <strong>{b.nombre}</strong> - {b.edad} años - Ingreso: {b.fechaIngreso}
              <br />
              Tipo de Ayuda: {b.tipoAyuda}
              <br />
              Observaciones: {b.observaciones}
              <br />
              <button onClick={() => setBeneficiarioEditando(b)}>Editar</button>
              <button onClick={() => eliminarBeneficiario(b.id)} style={{ marginLeft: '10px' }}>
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListaBeneficiarios;
