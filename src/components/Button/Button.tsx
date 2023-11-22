import { FC, ReactNode } from 'react';
import { Button } from '@mui/material';

interface PrimaryButtonProps {
  children: ReactNode;
  onClick: () => void;
  startIcon: ReactNode;
}

export const PrimaryButton: FC<PrimaryButtonProps> = ({ children, onClick, ...props }) => {
  const formatText = (text: string) => {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  };

  return (
    <Button
      variant="contained"
      color="inherit"
      type="button"
      size="small"
      disableElevation
      onClick={onClick}
      {...props}
      sx={{
        fontSize: 11,
        letterSpacing: '-0.02em',
        fontWeight: 500,
        color: 'var(--header-color)',
        background: 'var(--filters-bg-color)',
        borderRadius: 2,
      }}>
      {formatText(`${children}`)}
    </Button>
  );
};
