import TableHeader from './tableHeader';
import TableBody from './tableBody';
import React from 'react';
const Table = (props) => {
  const { data, columns, onSort, sortColumn } = props;
  return (
    <table className='table'>
      <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
      <TableBody columns={columns} data={data} />
    </table>
  );
};

export default Table;
