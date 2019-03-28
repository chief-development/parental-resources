import React from "react";
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import "./ask.css";
import MenuItem from '@material-ui/core/MenuItem';


const categories = [
  {
    value: 'AS',
    label: 'Academic Success',
  },
  {
    value: 'AC',
    label: 'Athletic Communication',
  },
  {
    value: 'AP',
    label: 'Athletic Performance',
  },
  {
    value: 'AT',
    label: 'Athletic Training',
  },
  {
    value: 'CM',
    label: 'IC. NCAA Compliance',
  },
  {
    value: 'GE',
    label: 'GameDay, Events and Operations',
  },
  {
    value: 'NR',
    label: 'NCAA Rules'
  },
  {
    value: 'other',
    label: 'Other'
  }
];

export default function AskAnything() {

  const [values, setValues] = React.useState({
    categories: 'AS',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <div className="askForm">


      <h3 style={{
        textAlign: 'center', fontStretch: '1px', fontSize: '45px'
      }}>
        Contact Us</h3>
      < br />
      <h4 style={{
        textAlign: 'center', fontStretch: '1px', fontSize: '25px', color: '#FBB904'
      }}>If you have any questions, feel free to get in touch with us!</h4>

      < hr style={{ backgroundColor: '#FBB904', borderTop: 'px double #FBB904' }} />

      < br />

      <form>
        <label>First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.." />
        <label>Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name.." />


        <label>Email</label>
        <input type="email" id="email" name="email" placeholder="Your email" />


        <TextField
          id="category"
          select
          label="Select"
          value={values.categories}
          onChange={handleChange('categories')}
          helperText="Please select a category"
          margin="normal"
          variant="outlined"
        >
          {categories.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}</TextField>

        < br />

        <label>Question</label>
        <textarea id="subject" name="subject" placeholder="Write something.."></textarea>

        < br />
        <Button variant="outlined" color="black" style={{ position: 'relative', left: '50%', width: '90px', height: '50px' }}>
          Submit
      </Button>

        < br />
      </form>
    </div >
  );
}
