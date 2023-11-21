import '../../variables.module.scss';
import { FC, ReactNode } from 'react';
import { Button } from '@mui/material';

interface PrimaryButtonProps {
  children: ReactNode;
  color: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  onClick: () => void;
  startIcon: ReactNode;
}

export const PrimaryButton: FC<PrimaryButtonProps> = ({ children, onClick, color, ...props }) => {
  return (
    <Button
      variant={'contained'}
      color={color}
      type="button"
      size="medium"
      disableElevation
      onClick={onClick}
      {...props}
      style={{
        width: '83px',
        height: '34px',
        fontSize: 13,
        letterSpacing: '-0.03em',
        fontWeight: 500,
        color: 'var(--header-color)',
        background: 'var(--filters-bg-color)',
        borderRadius: '7px',
      }}>
      {children}
    </Button>
  );
};
