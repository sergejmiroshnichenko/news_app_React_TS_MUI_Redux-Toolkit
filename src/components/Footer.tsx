import { FC } from 'react';
import Logo from 'assets/logo_footer.svg';
import { Link } from 'react-router-dom';
import Post from 'assets/post.svg';
import { Box, Link as MailLink, Typography } from '@mui/material';

interface FooterProps {
  className: string;
}

export const Footer: FC<FooterProps> = ({ className }) => {
  return (
    <footer className="footer">
      <nav className={className}>
        <Link to={'/'}>
          <img src={Logo} alt="logo image" />
        </Link>
        <Box display="flex" mt={1.8} justifyContent="space-between">
          <Typography variant="body2">©Formula 2023. All Rights Reserved</Typography>
          <MailLink
            href="mailto:info@formula.com"
            display="flex"
            color="text.secondary"
            sx={{ textDecoration: 'none' }}>
            <img src={Post} alt="post image" />
            <Typography variant="body2" ml={1}>
              info@formula.com
            </Typography>
          </MailLink>
        </Box>
      </nav>
    </footer>
  );
};
