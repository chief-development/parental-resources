import React from "react";
import { db } from "../../firebase/index";
import moment from "moment";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";

{
  /*
const categories = [
	  {
	    value: "Academic Success",
	    label: "Academic Success"
	  },
	  {
	    value: "Athletic Communication",
	    label: "Athletic Communication"
	  },
	  {
	    value: "Athletic Performance",
	    label: "Athletic Performance"
	  },
	  {
	    value: "Athletic Training",
	    label: "Athletic Training"
	  },
	  {
	    value: "IC. NCAA Compliance",
	    label: "IC. NCAA Compliance"
	  },
	  {
	    value: "GameDay, Events and Operations",
	    label: "GameDay, Events and Operations"
	  },
	  {
	    value: "NCAA Rules",
	    label: "NCAA Rules"
	  },
	  {
	    value: "Other",
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
	]
    
*/
}

export default function FAQ() {
  {
    /*
const [keywordInput, setKeywordInput] = React.useState("");


       const [values, setValues] = React.useState({
	    categories: "Academic Success",
	    sorting: "mostRes"
	  });
	
	  const handleChange = name => event => {
	    setValues({ ...values, [name]: event.target.value });
	  };  
*/
  }

  const [questions, setQuestions] = React.useState([]);

  //select questions that has an answer and create snapshot
  React.useEffect(() => {
    //db.collection("questions").where('show_on_web', '==',true)
    db.collection("questions")
      .where("answer", ">", "")
      .onSnapshot(snapshot => {
        let q = [];

        snapshot.forEach(doc => {
          q.push(doc.data());
        });
        setQuestions(q);
      });
  }, []);

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
        FAQ
      </h1>

      <div
        class="container"
        style={{
          width: "80%",
          backgroundColor: "white"
        }}
      >
        {/*
	        <TextField
	          id="category"
	          select
	          label="Select"
	          value={values.categories}
	          onChange={handleChange("categories")}
	          helperText="Filter Question by Category"
	          margin="normal"
	          variant="outlined"
	          style={{ margin: '40px' }}
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
	          style={{ margin: '40px' }}
	        >
	          {sorting.map(option => (
	            <MenuItem key={option.value} value={option.value}>
	              {option.label}
	            </MenuItem>
	          ))}
	        </TextField>
	
	        <SearchIcon style={{
	          color: '#b3a272',
	          position: 'relative',
	          left: '4%',
	          height: '20px',
	          width: '30px'
	        }} />
	        <InputBase
	
	          placeholder="Search…"
	          style={{ margin: '40px' }}
                      value={keywordInput}
                    onChange={event => {
                        const value = event.target.value;
                        setKeywordInput(value);
                        }}
                
                     
                  
	        />
	
	        <Button
	          variant="outlined"
	          color="black"
                  onClick =""
	          style={{
	            height: "50px",
	            margin: '40px'
	          }}
	        >
	          Go
	        </Button>
	      
              <hr />
	   */}

        {questions.map((q, index) => {
          const { question, date_asked, category, answer } = q;

          {
            /* transform date into readable format */
          }
          const timestamp = Date({ date_asked });
          const formattedDate = moment(timestamp).format("ll");

          {
            /* print set of answered questions */
          }
          return (
            <div>
              <p>
                Date: {formattedDate} &nbsp;&nbsp;&nbsp;&nbsp;Category:{" "}
                {category}&nbsp;&nbsp;&nbsp;&nbsp;
              </p>
              <p>{question}</p>
              <p>{answer}</p>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
}
