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
  onSelectionChange: (value: string) => void;
  value: string;
}

export const SelectComponent: FC<SelectFieldProps> = ({
  options,
  title,
  onSelectionChange,
  value,
}) => {
  const handleChange = (e: SelectChangeEvent) => {
    const selectedValue = e.target.value;
    onSelectionChange(selectedValue);
  };
  return (
    <Grid maxWidth={250} container direction="column" gap={0.4}>
      <Grid item>
        <Typography variant="subtitle2">{title}</Typography>
      </Grid>

      <Grid item>
        <FormControl size="small" sx={{ width: 250 }}>
          <InputLabel sx={{ fontSize: 13 }}>Select</InputLabel>

          <Select value={value} label="Select" style={{ height: 34 }} onChange={handleChange}>
            {options.map((option) => {
              const value = Object.values(option)[0];
              return (
                <MenuItem key={value} value={value}>
                  <ListItemText secondary={Object.keys(option)[0]} />
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};
