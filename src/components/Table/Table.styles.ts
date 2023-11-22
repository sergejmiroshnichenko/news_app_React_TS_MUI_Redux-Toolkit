import { styled, TableCell, tableCellClasses } from '@mui/material';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  &:hover {
    text-decoration: underline;
  }
`;

export const StyledTableCell = styled(TableCell)({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#EFEFF3',
    color: 'var(--main-color)',
    letterSpacing: '0.03em',
    padding: 12,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    borderRight: '1px solid var(--table-color)',
    img: {
      width: 100,
      height: 70,
    },
    '&:nth-child(1)': {
      width: '2%',
    },
    '&:nth-child(2)': {
      width: '19%',
    },
    '&:nth-child(3)': {
      width: '16%',
    },
    '&:nth-child(4)': {
      width: '24%',
    },
    '&:nth-child(5)': {
      width: '11%',
    },
    '&:nth-child(6)': {
      width: '9%',
      textAlign: 'center',
    },
  },
});
