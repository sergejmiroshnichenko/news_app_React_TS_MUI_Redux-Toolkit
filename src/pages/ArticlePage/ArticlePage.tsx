import styles from './ArticlePage.module.scss';
import { Layout } from 'components/Layout/Layout.tsx';
import { useAppSelector } from 'hooks/redux-hooks.ts';
import { Box, Stack, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import { FadeLoader } from 'react-spinners';

export const ArticlePage = () => {
  const { articles, error, isLoading } = useAppSelector((state) => state.articles);
  return (
    <Layout className={styles.wrapper}>
      {error ? (
        <Typography variant="h2" color="error" textAlign="center">
          Error occurred :{error}
        </Typography>
      ) : isLoading ? (
        <Stack>
          {articles?.slice(0, 2).map((article) => {
            return (
              <Stack key={article.title}>
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 3.4, mb: 3.8 }}>
                  <Link to="/">
                    <ArrowBackIcon />
                  </Link>
                  <Typography variant="h6" component="h3" ml={1.2}>
                    {article.title}
                  </Typography>
                </Box>

                <Stack
                  direction="row"
                  justifyContent="space-between"
                  color="text.secondary"
                  mb={2.4}>
                  <Typography variant="body1" component="h3" fontWeight={600}>
                    Source: {article.author}
                  </Typography>
                  <Typography variant="body1" component="h3" fontWeight={600}>
                    Publication date: {article.publishedAt.slice(0, 10)}
                  </Typography>
                </Stack>

                <Typography variant="body1" component="h3" fontWeight="bold" mb={1.6}>
                  Description
                </Typography>

                <Typography variant="body1" component="h3" mb={1.6}>
                  {article.description}
                </Typography>

                <img src={article.urlToImage} alt="image" />
              </Stack>
            );
          })}
        </Stack>
      ) : (
        <Box display="flex" alignItems="center" justifyContent="center" height="100vh">
          <FadeLoader />
        </Box>
      )}
    </Layout>
  );
};
