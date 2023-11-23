import { FC } from 'react';
import Logo from 'assets/logo.svg';
import { Link } from 'react-router-dom';

interface HeaderProps {
  className: string;
}

export const Header: FC<HeaderProps> = ({ className }) => {
  return (
    <header className="header">
      <nav className={className}>
        <Link to={'/'}>
          <img src={Logo} alt="logo image" />
        </Link>
      </nav>
    </header>
  );
};
