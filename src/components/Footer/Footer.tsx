import styles from './Footer.module.scss';
import { FC } from 'react';
import Logo from 'assets/logo_footer.svg';
import { Link } from 'react-router-dom';
import Post from 'assets/post.svg';

interface FooterProps {
  className: string;
}

export const Footer: FC<FooterProps> = ({ className }) => {
  return (
    <footer className={styles.footer}>
      <nav className={className}>
        <Link to={'/'}>
          <img src={Logo} alt="logo image" />
        </Link>
        <div className={styles.footerInfo}>
          <p>©Formula 2023. All Rights Reserved</p>
          <a href="mailto:info@formula.com">
            <img src={Post} alt="post image" /> &nbsp;
            <p>info@formula.com</p>
          </a>
        </div>
      </nav>
    </footer>
  );
};
