import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import { useAppSelector } from 'hooks/redux-hooks.ts';
import { StyledLink, StyledTableCell } from './Table.styles.ts';
import { truncateText } from 'services/helpers.ts';
import { headers } from 'services/consts.ts';
import { ChangeEvent, useState } from 'react';

export const TableComponent = () => {
  const [page, setPage] = useState(0);

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const { articles } = useAppSelector((state) => state.articles);

  const handleChangePage = (_e: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRowsPerPage(+e.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 350 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {headers.map((header) => (
                <StyledTableCell key={header}>{header}</StyledTableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {articles
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(({ title, author, description, publishedAt, urlToImage }) => {
                return (
                  <TableRow key={title}>
                    <StyledTableCell>
                      <img src={urlToImage} alt="image" />
                    </StyledTableCell>
                    <StyledTableCell>
                      <StyledLink to="/article"> {truncateText(title, 50)} </StyledLink>
                    </StyledTableCell>

                    <StyledTableCell>{truncateText(author, 50)}</StyledTableCell>
                    <StyledTableCell>{truncateText(description, 75)}</StyledTableCell>
                    <StyledTableCell>{publishedAt.slice(0, 10)}</StyledTableCell>
                    <StyledTableCell>
                      <LinkIcon />
                    </StyledTableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={articles.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};
