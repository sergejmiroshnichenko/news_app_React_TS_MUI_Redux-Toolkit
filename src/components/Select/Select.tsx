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
  setProps?: (e: SelectChangeEvent) => void;
}

export const SelectComponent: FC<SelectFieldProps> = ({ options, title, setProps }) => {
  // const [value, setValue] = useState('');

  // options.map((item) => console.log('item', item));
  // const handleChange = (e: SelectChangeEvent<string>) => {
  //   console.log('100', e.target.value);
  //   setValue(e.target.value);
  // };

  return (
    <Grid maxWidth={250} container direction="column" gap={0.4}>
      <Grid item>
        <Typography variant="subtitle2">{title}</Typography>
      </Grid>

      <Grid item>
        <FormControl size="small" sx={{ width: 250 }}>
          <InputLabel sx={{ fontSize: 13 }}>Select</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={value}
            label="Select"
            style={{ height: 34 }}
            onChange={setProps}>
            {options.map((option) => (
              <MenuItem key={Object.values(option)[0]} value={Object.values(option)[0]}>
                <ListItemText secondary={Object.keys(option)[0]} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};
