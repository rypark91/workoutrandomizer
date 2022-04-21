// import { Fragment } from "react";

import ReactDOM from 'react-dom';
import React, {useState} from 'react';
import classes from './SelectMenu.module.css';




const SelectMenu = (props) => {


     const [workout, setWorkout] = useState('');
     const [goal, setGoal] = useState('');
     const [ab, setAb] = useState(false);

     const workoutChangeHandler = (event) => {
          setWorkout(event.target.value);
     };
     const goalChangeHandler = (event) => {
          setGoal(event.target.value);

     };
     const abChangeHandler = (event) => {
          
          setAb(event.target.checked);
     };
     const submitHandler = (event) => {
          event.preventDefault();
          const workoutData = {
               workout: workout,
               goal: goal,
               ab: ab
           };
          props.onSetWorkout(workoutData);
                  
     }
     let workoutDisabled = !(workout.length);
     let goalDisabled = !(goal.length);
    let op = 0.5;
    let opAll = 0.5;
    if(!workoutDisabled){
        op = 1;
        if(!goalDisabled){
             opAll = 1;
        }

    }
    let finalDisabled = workoutDisabled || goalDisabled;
    console.log(finalDisabled);
 
     return (
          <div>
              <form onSubmit={submitHandler} className={classes.formBox}>
              <h3>Select Workout</h3>
                  <input type='radio' 
                         name='workout'
                       value='chest'
                       onChange={workoutChangeHandler}
                  />
                  <label>Chest</label>
                  <br/>
                  <input type='radio' 
                  name='workout'
                       value='back'
                       onChange={workoutChangeHandler}
                  />
                  <label>Back</label>
                  <br/>
                  <input type='radio' 
                  name='workout'
                       value='leg'
                       onChange={workoutChangeHandler}
                  />
                  <label>Leg</label>
                  <br/>
                  <input type='radio'
                  name='workout'
                       value='frontsideshoulder'
                       onChange={workoutChangeHandler}
                  />
                  <label>Front Side Shoulder</label>
                  <br/>
                  <input type='radio'
                  name='workout' 
                       value='rearshoulder'
                       onChange={workoutChangeHandler}
                  />
                  <label>Rear Shoulder</label>
                  <br/>
                  <input type='radio'
                  name='workout' 
                       value='bicep'
                       onChange={workoutChangeHandler}
                  />
                  <label>Bicep</label>
                  <br/>
                  <input type='radio'
                  name='workout' 
                       value='tricep'
                       onChange={workoutChangeHandler}
                  />
                  <label>Tricep</label>
                  <br/>
                  <input type='radio'
                  name='workout' 
                       value='push'
                       onChange={workoutChangeHandler}
                  />
                  <label>Push</label>
                  <br/>
                  <input type='radio'
                  name='workout' 
                       value='pull'
                       onChange={workoutChangeHandler}
                       />
                       
                  <label>Pull</label>
                  <br/>
                  <input type='checkbox'
                    onChange={abChangeHandler}
                    disabled={workoutDisabled}
                    opacity={op}
                  />
                  <label>Core?</label>
                  <br/>
                  <br/>
                  <h3>Select Goal</h3>
                  <input type='radio'
                  name='goal' 
                       value='strength'
                       onChange={goalChangeHandler}
                    />
                   <label>Strength</label>
                  <br/>
                  <input type='radio'
                  name='goal' 
                       value='muscle'
                       onChange={goalChangeHandler}
                    />
                   <label>Muscle Growth</label>
                  <br/>
                  <input type='radio'
                  name='goal' 
                       value='endurance'
                       onChange={goalChangeHandler}
                    />
                   <label>Endurance</label>
                  <br/>
                  <button type="submit" disabled={finalDisabled} onSubmit={submitHandler} style={{opacity: opAll}}>Submit</button>
              </form>
          </div>
          );
};

export default SelectMenu;