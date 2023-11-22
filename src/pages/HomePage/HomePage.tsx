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
import { ScaleLoader } from 'react-spinners';
import { Box, Stack, Typography } from '@mui/material';
import { TableComponent } from 'components/Table/Table.tsx';

export const HomePage = () => {
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  const { error, isLoading } = useAppSelector((state) => state.articles);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllArticles());
  }, [dispatch]);

  const toggleFilters = () => {
    setIsFiltersVisible(!isFiltersVisible);
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
        <Box display="flex" gap={2} mb={2.3}>
          <SelectComponent title="Category" options={categoryOptions} />
          <SelectComponent title="Country" options={countryOptions} />
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
