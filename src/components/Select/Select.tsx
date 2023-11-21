import {
  FormControl,
  Grid,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import { FC, useState } from 'react';

interface SelectFieldProps {
  options: string[];
  title: string;
}

export const SelectComponent: FC<SelectFieldProps> = ({ options, title }) => {
  const [age, setAge] = useState('');

  const handleChange = (e) => {
    setAge(e.target.value);
  };

  return (
    <Grid maxWidth={250} container direction="column" gap={0.4}>
      <Grid item>
        <Typography variant="subtitle2">{title}</Typography>
      </Grid>
      <Grid item>
        <FormControl size="small" sx={{ width: 250 }}>
          <InputLabel id="demo-simple-select-label">Select</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Select"
            style={{ height: 34 }}
            onChange={handleChange}>
            {options.map((option) => (
              <MenuItem key={option} value={option}>
                <ListItemText primary={option} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};
