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
    '&:nth-of-type(1)': {
      width: '2%',
    },
    '&:nth-of-type(2)': {
      width: '19%',
    },
    '&:nth-of-type(3)': {
      width: '16%',
    },
    '&:nth-of-type(4)': {
      width: '24%',
    },
    '&:nth-of-type(5)': {
      width: '11%',
    },
    '&:nth-of-type(6)': {
      width: '9%',
      textAlign: 'center',
    },
  },
});
