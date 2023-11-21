import styles from './Layout.module.scss';
import { Header } from 'components/Header/Header.tsx';
import { Footer } from 'components/Footer/Footer.tsx';
import { FC, ReactNode } from 'react';
import cx from 'classnames';

interface LayoutProps {
  children: ReactNode;
  className: string;
}

export const Layout: FC<LayoutProps> = ({ children, className }) => {
  return (
    <div className={className}>
      <Header className={styles.container} />
      <main className={cx(styles.main, styles.container)}>{children}</main>
      <Footer className={styles.container} />
    </div>
  );
};
