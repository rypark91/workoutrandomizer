// import { Fragment } from "react";

import ReactDOM from 'react-dom';
import React, {useState} from 'react';
import classes from './SelectMenu.module.css';




const SelectMenu = (props) => {


     const [workout, setWorkout] = useState('');
     const [ab, setAb] = useState(false);

     const valueChangeHandler = (event) => {
          setWorkout(event.target.value);
     };
     const abChangeHandler = (event) => {
          
          setAb(event.target.checked);
     };
     const submitHandler = (event) => {
          event.preventDefault();
          const workoutData = {
               workout: workout,
               ab: ab
           };
          props.onSetWorkout(workoutData);
                  
     }
     let disabled = !(workout.length);
    let op = 0.5;
    if(!disabled){
        op = 1;

    }
 
     return (
          <div>
               <h3>Select Workout</h3>
              <form onSubmit={submitHandler} className={classes.formBox}>
                  
                  <input type='radio' 
                         name='workout'
                       value='chest'
                       onChange={valueChangeHandler}
                  />
                  <label>Chest</label>
                  <br/>
                  <input type='radio' 
                  name='workout'
                       value='back'
                       onChange={valueChangeHandler}
                  />
                  <label>Back</label>
                  <br/>
                  <input type='radio' 
                  name='workout'
                       value='leg'
                       onChange={valueChangeHandler}
                  />
                  <label>Leg</label>
                  <br/>
                  <input type='radio'
                  name='workout'
                       value='frontsideshoulder'
                       onChange={valueChangeHandler}
                  />
                  <label>Front Side Shoulder</label>
                  <br/>
                  <input type='radio'
                  name='workout' 
                       value='rearshoulder'
                       onChange={valueChangeHandler}
                  />
                  <label>Rear Shoulder</label>
                  <br/>
                  <input type='radio'
                  name='workout' 
                       value='bicep'
                       onChange={valueChangeHandler}
                  />
                  <label>Bicep</label>
                  <br/>
                  <input type='radio'
                  name='workout' 
                       value='tricep'
                       onChange={valueChangeHandler}
                  />
                  <label>Tricep</label>
                  <br/>
                  <input type='radio'
                  name='workout' 
                       value='push'
                       onChange={valueChangeHandler}
                  />
                  <label>Push</label>
                  <br/>
                  <input type='radio'
                  name='workout' 
                       value='pull'
                       onChange={valueChangeHandler}
                       />
                       
                  <label>Pull</label>
                  <br/>
                  <input type='checkbox'
                    onChange={abChangeHandler}
                    disabled={disabled}
                  />
                  <label>Core?</label>
                  <br/>
                  
                  <button type="submit" disabled={disabled} onSubmit={submitHandler} style={{opacity: op}}>Submit</button>
              </form>
          </div>
          );
};

export default SelectMenu;