import React from 'react';

const ListaBeneficiarios = ({ beneficiarios }) => {
  return (
    <div>
      <h2>Listado de Beneficiarios</h2>
      {beneficiarios.length === 0 ? (
        <p>No hay beneficiarios registrados.</p>
      ) : (
        <ul>
          {beneficiarios.map((b) => (
            <li key={b.id}>{b.nombre}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListaBeneficiarios;