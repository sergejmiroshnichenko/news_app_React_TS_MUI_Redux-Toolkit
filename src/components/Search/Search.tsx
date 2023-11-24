import { FormControl, InputAdornment, OutlinedInput } from '@mui/material';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { ChangeEvent, FC } from 'react';

interface ISearchProps {
  setSearchKeyword: (value: ChangeEvent<HTMLInputElement>) => void;
}

export const Search: FC<ISearchProps> = ({ setSearchKeyword }) => {
  return (
    <FormControl variant="outlined" size="small">
      <OutlinedInput
        placeholder="Search article"
        onChange={setSearchKeyword}
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
