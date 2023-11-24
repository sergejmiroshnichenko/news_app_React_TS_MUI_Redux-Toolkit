import { Layout } from 'components/Layout.tsx';
import { PrimaryButton } from 'components/Button/Button.tsx';
import Filter from 'assets/filter.svg';
import { SelectComponent } from 'components/Select/Select.tsx';
import { categoryOptions, countryOptions } from 'components/Select/Select.data.ts';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks.ts';
import { ScaleLoader } from 'react-spinners';
import { Box, Stack, Typography } from '@mui/material';
import { TableComponent } from 'components/Table/Table.tsx';
import { fetchAllArticles } from 'store/slices/articlesSlice.ts';
import { useDebounce } from 'hooks/useDebounce.ts';
import { Search } from 'components/Search.tsx';

export const HomePage = () => {
  const [searchByArticles, setSearchByArticles] = useState('');

  const [categoryArticles, setCategoryArticles] = useState('');

  const [countryArticles, setCountryArticles] = useState('us');

  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  const { error, isLoading } = useAppSelector((state) => state.articles);

  const dispatch = useAppDispatch();

  const debouncedKeyWords = useDebounce(searchByArticles, 1000);

  useEffect(() => {
    dispatch(
      fetchAllArticles({
        q: debouncedKeyWords,
        category: categoryArticles,
        country: countryArticles,
      }),
    );
  }, [dispatch, debouncedKeyWords, categoryArticles, countryArticles]);

  const toggleFilters = () => {
    setIsFiltersVisible(!isFiltersVisible);
  };

  return (
    <Layout className="wrapper">
      <Stack direction="row" alignItems="center" mt={3.7} mb={2}>
        <Typography variant="h5" component="h2">
          Formula Top Headlines
        </Typography>

        <Box marginLeft="auto" display="flex" gap={2.5}>
          <Search setSearchKeyword={(e) => setSearchByArticles(e.target.value)} />
          <PrimaryButton
            onClick={toggleFilters}
            startIcon={<img src={Filter} alt="filter image" />}>
            Filters
          </PrimaryButton>
        </Box>
      </Stack>

      {isFiltersVisible && (
        <Box display="flex" gap={2} mb={2.3}>
          <SelectComponent
            title="Category"
            options={categoryOptions}
            onSelectionChange={(e) => setCategoryArticles(e.target.value)}
          />
          <SelectComponent
            title="Country"
            options={countryOptions}
            onSelectionChange={(e) => setCountryArticles(e.target.value)}
          />
        </Box>
      )}

      {error ? (
        <Typography variant="h2" color="error" textAlign="center">
          Error occurred :{error}
        </Typography>
      ) : isLoading ? (
        <TableComponent />
      ) : (
        <Box display="flex" alignItems="center" justifyContent="center" height="100vh">
          <ScaleLoader />
        </Box>
      )}
    </Layout>
  );
};
