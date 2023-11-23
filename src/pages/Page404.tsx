import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const Page404 = () => {
  return (
    <div>
      <Link to="/">
        <ArrowBackIcon />
      </Link>
      <h1>Page 404</h1>
    </div>
  );
};
