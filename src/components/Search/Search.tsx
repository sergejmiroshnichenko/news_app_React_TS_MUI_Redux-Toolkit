import { debounce, FormControl, InputAdornment, OutlinedInput } from '@mui/material';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { ChangeEvent, FC, useCallback } from 'react';

interface ISearchProps {
  setSearchKeyword?: (value: string) => void;
}

export const Search: FC<ISearchProps> = ({ setSearchKeyword }) => {
  const handleInputChange = useCallback(
    debounce((value: string) => {
      if (setSearchKeyword) {
        setSearchKeyword(value);
      }
    }, 300),
    [],
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    handleInputChange(value);
  };

  return (
    <FormControl variant="outlined" size="small">
      <OutlinedInput
        placeholder="Search article"
        onChange={handleChange}
        startAdornment={
          <InputAdornment position="start">
            <SearchRoundedIcon />
          </InputAdornment>
        }
        sx={{
          '& .MuiOutlinedInput-input': {
            width: '190px',
            fontSize: '14px',
            letterSpacing: '0.02em',
          },
        }}
      />
    </FormControl>
  );
};
