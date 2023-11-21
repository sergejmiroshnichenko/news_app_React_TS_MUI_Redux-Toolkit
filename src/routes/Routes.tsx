import { Route, Routes } from 'react-router-dom';
import { HomePage } from 'pages/HomePage/HomePage.tsx';
import { Page404 } from 'pages/Page404.tsx';
import { DetailsPage } from 'pages/DetailsPage/DetailsPage.tsx';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/details" element={<DetailsPage />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};
