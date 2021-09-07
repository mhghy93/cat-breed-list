import React from 'react';

const CatListItem = ({ cat, index }) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{cat.breed}</td>
      <td>{cat.country}</td>
      <td>{cat.origin}</td>
      <td>{cat.coat}</td>
      <td>{cat.pattern}</td>
    </tr>
  );
};

export default CatListItem;
