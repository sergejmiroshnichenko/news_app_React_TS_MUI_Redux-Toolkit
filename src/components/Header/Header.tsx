import { FC } from 'react';
import Logo from 'assets/logo.svg';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

interface HeaderProps {
  className: string;
}

export const Header: FC<HeaderProps> = ({ className }) => {
  return (
    <header className={styles.header}>
      <nav className={className}>
        <Link to={'/'}>
          <img src={Logo} alt="logo image" />
        </Link>
      </nav>
    </header>
  );
};
