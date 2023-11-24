import {
  FormControl,
  Grid,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import { FC } from 'react';

interface SelectFieldProps {
  options: Record<string, string>[];
  title: string;
  onSelectionChange?: (e: SelectChangeEvent) => void;
}

export const SelectComponent: FC<SelectFieldProps> = ({ options, title, onSelectionChange }) => {
  return (
    <Grid maxWidth={250} container direction="column" gap={0.4}>
      <Grid item>
        <Typography variant="subtitle2">{title}</Typography>
      </Grid>

      <Grid item>
        <FormControl size="small" sx={{ width: 250 }}>
          <InputLabel sx={{ fontSize: 13 }}>Select</InputLabel>
          <Select label="Select" style={{ height: 34 }} onChange={onSelectionChange}>
            {options.map((option) => {
              const value = Object.values(option)[0];
              return (
                <MenuItem key={value} value={value}>
                  <ListItemText secondary={value} />
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};
