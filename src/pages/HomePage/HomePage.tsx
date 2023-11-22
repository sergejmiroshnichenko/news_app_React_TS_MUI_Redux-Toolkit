import styles from './HomePage.module.scss';
import { Layout } from 'components/Layout/Layout.tsx';
import { PrimaryButton } from 'components/Button/Button.tsx';
import Filter from 'assets/filter.svg';
import { Search } from 'components/Search/Search.tsx';
import { SelectComponent } from 'components/Select/Select.tsx';
import { categoryOptions, countryOptions } from 'components/Select/Select.data.ts';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks.ts';
import { fetchAllArticles } from 'store/slices/articlesSlice.ts';
import LinkIcon from '@mui/icons-material/Link';
import {
  Box,
  Paper,
  Stack,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

export const HomePage = () => {
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  const { articles, error, isLoading } = useAppSelector((state) => state.articles);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllArticles());
  }, [dispatch]);

  const toggleFilters = () => {
    setIsFiltersVisible(!isFiltersVisible);
  };

  const headers = ['Image', 'Title', 'Authors', 'Description', 'Publication date', 'Original URL'];

  const StyledTableCell = styled(TableCell)({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#EFEFF3',
      color: 'var(--main-color)',
      letterSpacing: '0.03em',
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      borderRight: '1px solid var(--table-color)',
    },
  });

  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  };

  return (
    <Layout className={styles.wrapper}>
      <Stack direction="row" alignItems="center" mt={3.7} mb={2}>
        <Typography variant="h5" component="h2">
          Formula Top Headlines
        </Typography>
        <Box marginLeft="auto" display="flex" gap={2.5}>
          <Search setSearchKeyword={() => {}} />
          <PrimaryButton
            onClick={toggleFilters}
            startIcon={<img src={Filter} alt="filter image" />}>
            Filters
          </PrimaryButton>
        </Box>
      </Stack>

      {isFiltersVisible && (
        <Box display="flex" gap={2} mb={1.8}>
          <SelectComponent title="Category" options={categoryOptions} />
          <SelectComponent title="Country" options={countryOptions} />
        </Box>
      )}

      {error ? (
        <Typography variant="h2" color="error" textAlign="center">
          Error occurred :{error}
        </Typography>
      ) : isLoading ? (
        <Paper sx={{ overflow: 'hidden' }}>
          <TableContainer sx={{ maxHeight: 420 }}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  {headers.map((header) => (
                    <StyledTableCell key={header}>{header}</StyledTableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {articles?.map((article) => {
                  return (
                    <TableRow key={article.description}>
                      <StyledTableCell sx={{ width: '12%' }}>
                        <img width={100} height={70} src={article.urlToImage} alt="image" />
                      </StyledTableCell>
                      <StyledTableCell sx={{ width: '23%' }}>
                        {truncateText(article.title, 50)}
                      </StyledTableCell>
                      <StyledTableCell sx={{ width: '16%' }}>{article.author}</StyledTableCell>
                      <StyledTableCell sx={{ width: '26%' }}>
                        {truncateText(article.description, 70)}
                      </StyledTableCell>
                      <StyledTableCell sx={{ width: '12%' }}>{article.publishedAt}</StyledTableCell>
                      <TableCell sx={{ width: '11%', textAlign: 'center' }}>
                        <LinkIcon />
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      ) : (
        <p>Loading...</p>
      )}
    </Layout>
  );
};
