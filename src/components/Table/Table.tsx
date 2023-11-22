import { Paper, Table, TableBody, TableContainer, TableHead, TableRow } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import { useAppSelector } from 'hooks/redux-hooks.ts';
import { StyledLink, StyledTableCell } from './Table.styles.ts';
import { truncateText } from 'services/helpers.ts';
import { headers } from 'services/consts.ts';

export const TableComponent = () => {
  const { articles } = useAppSelector((state) => state.articles);

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
            {articles?.map(({ title, author, description, publishedAt, urlToImage }) => {
              return (
                <TableRow key={title}>
                  <StyledTableCell>
                    <img src={urlToImage} alt="image" />
                  </StyledTableCell>
                  <StyledTableCell>
                    <StyledLink to="/details"> {truncateText(title, 50)} </StyledLink>
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
    </Paper>
  );
};
