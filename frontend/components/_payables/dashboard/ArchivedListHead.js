// material
import { visuallyHidden } from '@mui/utils';
import { Box, Checkbox, TableRow, TableCell, TableHead, TableSortLabel } from '@mui/material';

// ----------------------------------------------------------------------

const headLabel = [
    { id: 'id', label: 'Invoice ID', alignRight: false },
    { id: 'invoice_id', label: 'Invoice ID', alignRight: true },
    { id: 'supplier', label: 'Supplier', alignRight: true },
    { id: 'order_date', label: 'Purchase Date', alignRight: true },
    { id: 'amount_due', label: 'Total Amount', alignRight: true },
    { id: 'days_left', label: 'Status', alignRight: true },
    { id: '' }
]

export default function ArchivedListHead({
  order,
  orderBy,
  rowCount,
  numSelected,
  onRequestSort,
  onSelectAllClick,
  hideCheckbox
}) {
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
<TableHead>
      <TableRow>
        <TableCell padding="checkbox">
         {!hideCheckbox &&  
         (
            <Checkbox
              disabled={Boolean(numSelected <= 0)}
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
            />
         )}
        </TableCell>
        {headLabel.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.alignRight ? 'right' : 'left'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              hideSortIcon
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box sx={{ ...visuallyHidden }}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
