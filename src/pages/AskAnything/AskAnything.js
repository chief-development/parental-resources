import React from "react";
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
export default function AskAnything() {
  return (
    <div>

      <br />
      <h3 style={{
        textAlign: 'center', fontStretch: '1px', fontSize: '45px'
      }}>
        Contact Us</h3>
      < br />
      <h4 style={{
        textAlign: 'center', fontStretch: '1px', fontSize: '25px'
      }}>If you have any questions, feel free to get in touch!</h4>

      < br />
      < hr style={{ backgroundColor: '#FBB904', borderTop: 'px double #FBB904' }} />

      < br />

      <p style={{ fontSize: '18px', textAlign: 'center' }}> Please provide the information requested</p>


      <TextField id="uName" label="Name" variant="outlined" style={{ position: 'absolute', top: '45%', left: '40%' }}></TextField>

      <TextField id="uEmail" label="E-mail" variant="outlined" style={{ position: 'absolute', top: '45%', left: '60%' }}></TextField>

      <FormControl component="fieldset" style={{ position: 'absolute', top: '59%', left: '50%' }} >
        <FormLabel component="legend">Choose your category</FormLabel>
        <RadioGroup
          aria-label="Category"
        >

          <FormControlLabel
            value="aSuccess"
            control={<Radio color="primary" />}
            label="Academic Success"
            labelPlacement="start"
            style={{ fontSize: '20px' }}
          />

          <FormControlLabel
            value="aCommunication"
            control={<Radio color="primary" />}
            label="Athletic Communication"
            labelPlacement="start"
          />

          <FormControlLabel
            value="aPerfomance"
            control={<Radio color="primary" />}
            label="Athletic Performance"
            labelPlacement="start"
          />

          <FormControlLabel
            value="aTraining"
            control={<Radio color="primary" />}
            label="Athletic Training"
            labelPlacement="start"
          />

          <FormControlLabel
            value="compliance"
            control={<Radio color="primary" />}
            label="IC. NCAA Compliance"
            labelPlacement="start"
          />

          <FormControlLabel
            value="Events"
            control={<Radio color="primary" />}
            label="IGameday Events and Operations"
            labelPlacement="start"
          />

          <FormControlLabel
            value="nRules"
            control={<Radio color="primary" />}
            label="NCAA Rules"
            labelPlacement="start"
          />

          <FormControlLabel
            value="other"
            control={<Radio color="primary" />}
            label="Other"
            labelPlacement="start"
          />




        </RadioGroup>
      </FormControl>

    </div >
  );
}
