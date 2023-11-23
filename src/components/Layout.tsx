import { Header } from 'components/Header.tsx';
import { Footer } from 'components/Footer.tsx';
import { FC, ReactNode } from 'react';
import cx from 'classnames';

interface LayoutProps {
  children: ReactNode;
  className: string;
}

export const Layout: FC<LayoutProps> = ({ children, className }) => {
  return (
    <div className={className}>
      <Header className="container" />
      <main className={cx('main', 'container')}>{children}</main>
      <Footer className="container" />
    </div>
  );
};
