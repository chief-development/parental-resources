import React from "react";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';

export default function AskAnything() {
  return (
    <div>

      <h2 style={{
        fontSize: "30px",
        lineHeight: '2',
        letterSpacing: '-2px',
        textAlign: 'center'
      }}>
        Please Ask us Anything! </h2>
      <FormControl>
        <InputLabel>
          Name
        </InputLabel>
        <OutlinedInput />
      </FormControl>
    </div>
  );
}
