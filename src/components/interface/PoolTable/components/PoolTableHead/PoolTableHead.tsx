import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';

import { TableOrder, TableFields } from '../../types';

export type PoolTableHeadProps = {
  order: TableOrder;
  orderBy: TableFields;
  onSort: (field: TableFields) => void;
  labels: [TableFields, string][];
};

const PoolTableHead: React.FunctionComponent<PoolTableHeadProps> = ({
  order,
  orderBy,
  onSort,
  labels,
}) => {
  const createSortHandler = (field: TableFields) => (_event: React.MouseEvent<unknown>) =>
    onSort(field);

  return (
    <TableHead>
      <TableRow
        sx={{
          '& .MuiTableCell-root': {
            borderColor: 'transparent',
            padding: (theme) => theme.spacing(4),
          },
        }}
      >
        {labels.map(([field, label]) => (
          <TableCell
            key={field}
            align="left"
            padding="normal"
            sortDirection={orderBy === field ? order : false}
          >
            <TableSortLabel
              active={orderBy === field}
              direction={orderBy === field ? order : 'asc'}
              onClick={createSortHandler(field)}
            >
              {label}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell align="left" padding="normal"></TableCell>
      </TableRow>
    </TableHead>
  );
};

export default PoolTableHead;
