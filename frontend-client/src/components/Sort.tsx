import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { makeStyles } from "@material-ui/core/styles";
import "./Sort.css";

const useStyles = makeStyles({
  select: {
    "& .MuiOutlinedInput-notchedOutline": {
      display: "none",
    },
  },
});

export default function SelectLabels() {
  const [order, setOrder] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setOrder(event.target.value);
  };

  const classes = useStyles();

  return (
    <div className="sort-container">
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={order}
          onChange={handleChange}
          displayEmpty
          inputProps={{
            "aria-label": "Without label",
          }}
          className={classes.select}
          MenuProps={{ classes: { paper: classes.select } }}
        >
          <MenuItem value="">
            <div className="order">Order by</div>
          </MenuItem>
          <MenuItem value={1}>Ascending</MenuItem>
          <MenuItem value={2}>Descending</MenuItem>
          <MenuItem value={3}>Popularity</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
