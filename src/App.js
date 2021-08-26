import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import {
  TextField,
  Paper,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@material-ui/core";

function App() {
  const [bgColor, setBgColor] = useState("brown");
  const [value, setValue] = useState("primary");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Paper>
          <div>yo</div>
          <TextField
            label="Outlined"
            variant="outlined"
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value)}
          />
          <br />
          <br />
          <FormControl component="fieldset">
            <FormLabel component="legend">Paper Border</FormLabel>
            <RadioGroup
              aria-label="paperborder"
              name="paperborder"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                value="primary"
                control={<Radio />}
                label="Primary"
              />
              <FormControlLabel
                value="secondary"
                control={<Radio />}
                label="Secondary"
              />
            </RadioGroup>
          </FormControl>
        </Paper>
      </header>
    </div>
  );
}

export default App;
