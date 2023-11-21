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
import { ArticleItem } from 'components/ArticleItem/ArticleItem.tsx';

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

  return (
    <Layout className={styles.wrapper}>
      <div className={styles.searchPanel}>
        <h1>Formula Top Headlines</h1>
        <Search setSearchKeyword={() => {}} />
        <PrimaryButton
          color="inherit"
          onClick={toggleFilters}
          startIcon={<img src={Filter} alt="filter image" />}>
          Filters
        </PrimaryButton>
      </div>

      {isFiltersVisible && (
        <div className={styles.filtersGroup}>
          <SelectComponent title="Category" options={categoryOptions} />
          <SelectComponent title="Country" options={countryOptions} />
        </div>
      )}

      {error ? (
        <h1>Error occurred :{error}</h1>
      ) : isLoading ? (
        <div>
          {articles?.map((article) => <ArticleItem key={article.description} {...article} />)}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </Layout>
  );
};
