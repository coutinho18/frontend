import React from 'react';

const estudante = ({ nome, email, curso, media }) => {
  const status = media >= 7.0 ? 'APROVADO(A)' : 'REPROVADO(A)';

  return (
    <>
      <h2>Nome: {nome}</h2>
      <p>Email: {email}</p>
      <p>Curso: {curso}</p>
      <p>Média: {media}</p>
      <p>Status: {status}</p>
      <hr />
    </>
  );
};
