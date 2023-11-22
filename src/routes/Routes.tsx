import { Route, Routes } from 'react-router-dom';
import { HomePage } from 'pages/HomePage/HomePage.tsx';
import { Page404 } from 'pages/Page404.tsx';
import { ArticlePage } from 'pages/ArticlePage/ArticlePage.tsx';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/article" element={<ArticlePage />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};
