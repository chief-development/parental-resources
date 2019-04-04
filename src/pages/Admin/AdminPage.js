import React from "react";

export default function AdminPage() {
    return (
        <div className="Header">
            <p>ADMIN UI</p>
        </div>
    );
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";

const categories = [
  {
    value: "AS",
    label: "Academic Success"
  },
  {
    value: "AC",
    label: "Athletic Communication"
  },
  {
    value: "AP",
    label: "Athletic Performance"
  },
  {
    value: "AT",
    label: "Athletic Training"
  },
  {
    value: "CM",
    label: "IC. NCAA Compliance"
  },
  {
    value: "GE",
    label: "GameDay, Events and Operations"
  },
  {
    value: "NR",
    label: "NCAA Rules"
  },
  {
    value: "other",
    label: "Other"
  }
];

const sorting = [
  {
    value: "mostRes",
    label: "Most Recent"
  },
  {
    value: "mostPop",
    label: "Most Popular"
  }
];

export default function Admin() {
  const [values, setValues] = React.useState({
    categories: "AS",
    sorting: "mostRes"
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <div>
      <h1
        style={{
          fontSize: "80px",
          color: "#b3a272",
          lineHeight: "2",
          letterSpacing: "-2px",
          textShadow: "0px 2px 3px #555",
          textAlign: "left"
        }}
      >
        Admin Portal
      </h1>

      <div
        class="container"
        style={{
          width: "80%",
          backgroundColor: "white"
        }}
      >
        <TextField
          id="category"
          select
          label="Select"
          value={values.categories}
          onChange={handleChange("categories")}
          helperText="Filter Question by Category"
          margin="normal"
          variant="outlined"
          style={{ margin: "40px" }}
        >
          {categories.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          id="sorting"
          select
          label="Select"
          value={values.sorting}
          onChange={handleChange("sorting")}
          helperText="Sort Question by:"
          margin="normal"
          variant="outlined"
          style={{ margin: "40px" }}
        >
          {sorting.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <SearchIcon
          style={{
            color: "#b3a272",
            position: "relative",
            left: "4%",
            height: "20px",
            width: "30px"
          }}
        />
        <InputBase placeholder="Search…" style={{ margin: "40px" }} />

        <Button
          variant="outlined"
          color="black"
          style={{
            height: "50px",
            margin: "40px"
          }}
        >
          Go
        </Button>
      </div>
    </div>
  );
}
