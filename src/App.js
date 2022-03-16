import React, { useState } from 'react';
import CardDeck from './CardDeck.js';
import SelectMenu from './SelectMenu.js';
import './App.css';


//list of workouts
//...............
let chestData = [{
  id: Math.random().toString(),
  picture: "workoutimages/chest/benchpress.jpg",
  workoutName: "Bench Press",
  repSet: "3X10"
},
{
  id: Math.random().toString(),
  picture: "workoutimages/chest/dbdeclinefly.jpg",
  workoutName: "Dumbbell Decline Fly",
  repSet: "3X10"
},
{
  id: Math.random().toString(),
  picture: "workoutimages/chest/dbfly.jpg",
  workoutName: "Dumbbell Fly",
  repSet: "3X10"
},
{
  id: Math.random().toString(),
  picture: "workoutimages/chest/dbinclinepress.jpg",
  workoutName: "Dumbbell Incline Press",
  repSet: "3X10"
},
{
  id: Math.random().toString(),
  picture: "workoutimages/chest/dbpress.jpg",
  workoutName: "Dumbbell Press",
  repSet: "3X10"
},
{
  id: Math.random().toString(),
  picture: "workoutimages/chest/declinepress.jpg",
  workoutName: "Decline Press",
  repSet: "3X10"
},
{
  id: Math.random().toString(),
  picture: "workoutimages/chest/declinedbpress.jpg",
  workoutName: "Decline Dumbbell Press",
  repSet: "3X10"
},
{
  id: Math.random().toString(),
  picture: "workoutimages/chest/inclinebenchpress.jpg",
  workoutName: "Incline Bench Press",
  repSet: "3X10"
},
{
  id: Math.random().toString(),
  picture: "workoutimages/chest/inclinedbfly.jpg",
  workoutName: "Incline Dumbbell Fly",
  repSet: "3X10"
},
{
  id: Math.random().toString(),
  picture: "workoutimages/chest/landminepress.jpg",
  workoutName: "Landmine Press",
  repSet: "3X10"
},
{
  id: Math.random().toString(),
  picture: "workoutimages/chest/machinepress.jpg",
  workoutName: "Machine Press",
  repSet: "3X10"
},
{
  id: Math.random().toString(),
  picture: "workoutimages/chest/pecfly.jpg",
  workoutName: "Pec Fly",
  repSet: "3X10"
},
{
  id: Math.random().toString(),
  picture: "workoutimages/chest/widegripdip.jpg",
  workoutName: "Wide Grip Dip",
  repSet: "3X10"
}
];
let backData = [{
  id: Math.random().toString(),
  picture: "workoutimages/back/backextension.jpg",
  workoutName: "Back Extension",
  repSet: "3X10"
},
{
  id: Math.random().toString(),
  picture: "workoutimages/back/bentoverrows.jpg",
  workoutName: "Bentover Rows",
  repSet: "3X10"
},
{
  id: Math.random().toString(),
  picture: "workoutimages/back/landminerow.jpg",
  workoutName: "Landmine Row",
  repSet: "3X10"
},
{
  id: Math.random().toString(),
  picture: "workoutimages/back/latpulldown.jpg",
  workoutName: "Lat Pull Down",
  repSet: "3X10"
},
{
  id: Math.random().toString(),
  picture: "workoutimages/back/neutralgrippulldown.jpg",
  workoutName: "Neutral Grip Pull Down",
  repSet: "3X10"
},
{
  id: Math.random().toString(),
  picture: "workoutimages/back/seatedcablerow.jpg",
  workoutName: "Seated Cable Row",
  repSet: "3X10"
},
{
  id: Math.random().toString(),
  picture: "workoutimages/back/singlearmdbrow.jpg",
  workoutName: "Single Arm Dumbbell Row",
  repSet: "3X10"
}
];
let legData = [{
  id: Math.random().toString(),
  picture: "workoutimages/leg/barbellsquat.jpg",
  workoutName: "Barbell Squat",
  repSet: "3X10"
},
{
  id: Math.random().toString(),
  picture: "workoutimages/leg/bulgariansplitsquats.jpg",
  workoutName: "Bulgarian Split Squats",
  repSet: "3X10"
},
{
  id: Math.random().toString(),
  picture: "workoutimages/leg/dblunge.jpg",
  workoutName: "Dumbbell Lunge",
  repSet: "3X10"
},
{
  id: Math.random().toString(),
  picture: "workoutimages/leg/deadlift.jpg",
  workoutName: "Deadlift",
  repSet: "3X10"
},
{
  id: Math.random().toString(),
  picture: "workoutimages/leg/frontsquat.jpg",
  workoutName: "Front Squat",
  repSet: "3X10"
},
{
  id: Math.random().toString(),
  picture: "workoutimages/leg/gobletsquat.jpg",
  workoutName: "Goblet Squat",
  repSet: "3X10"
},
{
  id: Math.random().toString(),
  picture: "workoutimages/leg/hipthrust.jpg",
  workoutName: "Hip Thrust",
  repSet: "3X10"
},
{
  id: Math.random().toString(),
  picture: "workoutimages/leg/legextension.jpg",
  workoutName: "Leg Extension",
  repSet: "3X10"
},
{
  id: Math.random().toString(),
  picture: "workoutimages/leg/legpress.jpg",
  workoutName: "Leg Press",
  repSet: "3X10"
},
{
  id: Math.random().toString(),
  picture: "workoutimages/leg/lyinghamstringcurl.png",
  workoutName: "Lying Hamstring Curl",
  repSet: "3X10"
},
{
  id: Math.random().toString(),
  picture: "workoutimages/leg/reversedblunge.jpg",
  workoutName: "Reserve Dumbbell Lunge",
  repSet: "3X10"
},
{
  id: Math.random().toString(),
  picture: "workoutimages/leg/romaniandeadlift.jpg",
  workoutName: "Romanian Deadlift",
  repSet: "3X10"
},
{
  id: Math.random().toString(),
  picture: "workoutimages/leg/seatedhamstringcurl.jpg",
  workoutName: "Seated Hamstring Curl",
  repSet: "3X10"
}
];
let frontSideShoulderData = [{
  id: Math.random().toString(),
  picture: "workoutimages/frontsideshoulder/arnoldpress.jpg",
  workoutName: "Arnold Press",
  repSet: "3X10"
},
{
  id: Math.random().toString(),
  picture: "workoutimages/frontsideshoulder/barbelluprightrow.jpg",
  workoutName: "Barbell Upright Row",
  repSet: "3X10"
},
{
  id: Math.random().toString(),
  picture: "workoutimages/frontsideshoulder/dbfrontraise.jpg",
  workoutName: "Dumbbell Front Raise",
  repSet: "3X10"
},
{
  id: Math.random().toString(),
  picture: "workoutimages/frontsideshoulder/dblateralraises.jpg",
  workoutName: "Dumbbell Lateral Raises",
  repSet: "3X10"
},
{
  id: Math.random().toString(),
  picture: "workoutimages/frontsideshoulder/dbmilitarypress.jpg",
  workoutName: "Dumbbell Military Press",
  repSet: "3X10"
},
{
  id: Math.random().toString(),
  picture: "workoutimages/frontsideshoulder/overheadbarbellpress.jpg",
  workoutName: "Overhead Barbell Press",
  repSet: "3X10"
},
{
  id: Math.random().toString(),
  picture: "workoutimages/frontsideshoulder/singlearmdbpress.jpg",
  workoutName: "Single Arm Dumbbell Press",
  repSet: "3X10"
}
];
let rearShoulderData = [{
  id: Math.random().toString(),
  picture: "workoutimages/rearshoulder/cablefacepull.jpg",
  workoutName: "Cable Face Pull",
  repSet: "3X10"
},
{
  id: Math.random().toString(),
  picture: "workoutimages/rearshoulder/dbinclineyraise.jpg",
  workoutName: "Dumbbell Incline Y Raise",
  repSet: "3X10"
},
{
  id: Math.random().toString(),
  picture: "workoutimages/rearshoulder/dbinclineraise.jpg",
  workoutName: "Dumbbell Incline Raise",
  repSet: "3X10"
},
{
  id: Math.random().toString(),
  picture: "workoutimages/rearshoulder/dbrearfly.jpg",
  workoutName: "Dumbbell Rear Fly",
  repSet: "3X10"
},
{
  id: Math.random().toString(),
  picture: "workoutimages/rearshoulder/seateddbrearfly.jpg",
  workoutName: "Seated Dumbbell Rear Fly",
  repSet: "3X10"
}
];
let bicepData = [{
  id: Math.random().toString(),
  picture: "./workoutimages/bicep/barbellcurl.jpg",
  workoutName: "Barbell Curl",
  repSet: "3X10"
},
{
  id: Math.random().toString(),
  picture: "./workoutimages/bicep/cablecurl.jpg",
  workoutName: "Cable Curl",
  repSet: "3X10"
},
{
  id: Math.random().toString(),
  picture: "workoutimages/bicep/ezbarpreachercurl.jpg",
  workoutName: "EZ Bar Preacher Curl",
  repSet: "3X10"
},
{
  id: Math.random().toString(),
  picture: "workoutimages/bicep/hammercurl.jpg",
  workoutName: "Hammer Curl",
  repSet: "3X10"
},
{
  id: Math.random().toString(),
  picture: "workoutimages/bicep/inclinedbcurl.jpg",
  workoutName: "Incline Dumbbell Curl",
  repSet: "3X10"
},
{
  id: Math.random().toString(),
  picture: "workoutimages/bicep/reversecurl.jpg",
  workoutName: "Reverse Curl",
  repSet: "3X10"
},
{
  id: Math.random().toString(),
  picture: "workoutimages/bicep/reversegrippulldown.jpg",
  workoutName: "Reverse Grip Pulldown",
  repSet: "3X10"
}
];
let tricepData = [{
  id: Math.random().toString(),
  picture: "workoutimages/tricep/benchdip.jpg",
  workoutName: "Bench Dip",
  repSet: "3X10"
},
{
  id: Math.random().toString(),
  picture: "workoutimages/tricep/closegripbench.jpg",
  workoutName: "Close Grip Bench",
  repSet: "3X10"
},
{
  id: Math.random().toString(),
  picture: "workoutimages/tricep/skullcrusher.jpg",
  workoutName: "Skull Crusher",
  repSet: "3X10"
},
{
  id: Math.random().toString(),
  picture: "workoutimages/tricep/tricepdbextension.jpg",
  workoutName: "Tricep Dumbbell Extension",
  repSet: "3X10"
},
{
  id: Math.random().toString(),
  picture: "workoutimages/tricep/triceppulldown.jpg",
  workoutName: "Tricep Pull Down",
  repSet: "3X10"
}
];
let abData = [{
  id: Math.random().toString(),
  picture: "workoutimages/core/crunches.png",
  workoutName: "Crunches",
  repSet: "3X10"
},
{
  id: Math.random().toString(),
  picture: "workoutimages/core/heeltouches.jpg",
  workoutName: "Heel Touches",
  repSet: "3X10"
},
{
  id: Math.random().toString(),
  picture: "workoutimages/core/kneetoelbowcrunches.jpg",
  workoutName: "Knee to Elbow Crunches",
  repSet: "3X10"
},

{
  id: Math.random().toString(),
  picture: "workoutimages/core/russiantwist.jpg",
  workoutName: "Russian Twist",
  repSet: "3X10"
},
{
  id: Math.random().toString(),
  picture: "workoutimages/core/situp.jpg",
  workoutName: "Sit Up",
  repSet: "3X10"
}
];

let calfData = [
  {
    id: Math.random().toString(),
    picture: "workoutimages/calf/machinecalfraises.jpg",
    workoutName: "Machine Calf Raises",
    repSet: "3X10"
  },
  {
    id: Math.random().toString(),
    picture: "workoutimages/calf/seateddbcalfraise.jpg",
    workoutName: "Seated Dumbbell Calf Raises",
    repSet: "3X10"
  },
  {
    id: Math.random().toString(),
    picture: "workoutimages/calf/single-legcalfraise.jpg",
    workoutName: "SIngle-Leg Calf Raise",
    repSet: "3X10"
  },
  {
    id: Math.random().toString(),
    picture: "workoutimages/calf/standingbarbellcalfraise.jpg",
    workoutName: "Standing Barbell Calf Raises",
    repSet: "3X10"
  },
  {
    id: Math.random().toString(),
    picture: "workoutimages/calf/standingdbcalfraise.jpg",
    workoutName: "Standing Dumbbell Calf Raise",
    repSet: "3X10"
  }
];

//declares  and initializes the work out decks
var deck;

function init(){
  deck = [];
}

//work out shuffling functions
function shuffleWorkout(length, arr1, arr2){

  var i = 1;
  while(i <= length){
    //randomly selects a chest workout, removes it from the deck copy
    //and pushes the workout in the real deck
      var num = Math.floor(Math.random() * arr1.length);
      arr2.push(arr1[num]);
      arr1.splice(num, 1);
      i++;
  }
}
function shuffleLeg(length, arr1, arr2){
  var i = 1;
  while(i <= length){
    //randomly selects a leg workout, removes it from the deck copy
    //and pushes the workout in the real deck
      var num = Math.floor(Math.random() * arr1.length);
      arr2.push(arr1[num]);
      arr1.splice(num, 1);
      i++;
  }
  num = Math.floor(Math.random() * calfData.length);
  arr2.push(calfData[num]);
}

function shufflePush(){
  shuffleWorkout(3,chestData,deck);
  shuffleWorkout(2,frontSideShoulderData,deck);
  shuffleWorkout(2, tricepData, deck);
}
function shufflePull(){
  shuffleWorkout(3,backData,deck);
  shuffleWorkout(2,rearShoulderData,deck);
  shuffleWorkout(2, bicepData, deck);
}
init();


function App() {

  const [visibleMenu, setVisibleMenu] = useState(true);
  const [workoutDeck, setDeck] = useState([]);
  const setWorkoutHander = (workoutData) => {
    
    if(workoutData.workout === 'chest'){
      shuffleWorkout(6,chestData,deck);
    }
    else if(workoutData.workout === 'back'){
      shuffleWorkout(6,backData,deck);
    }
    else if(workoutData.workout === 'leg'){
      shuffleLeg(6,legData,deck);
    }
    else if(workoutData.workout === 'frontsideshoulder'){
      shuffleWorkout(6,frontSideShoulderData,deck);
    }
    else if(workoutData.workout === 'rearshoulder'){
      shuffleWorkout(5,rearShoulderData,deck);
    }
    else if(workoutData.workout === 'bicep'){
      shuffleWorkout(6,bicepData,deck);
    }
    else if(workoutData.workout === 'tricep'){
      shuffleWorkout(5,tricepData,deck);
    }
    else if(workoutData.workout === 'push'){
      shufflePush();
    }
    else if(workoutData.workout === 'pull'){
      shufflePull();
    }
    if(workoutData.ab){
      shuffleWorkout(3,abData, deck);
    }
    setDeck(deck);
    setVisibleMenu(false);
  };
  return (
    <div className="App">
      <h1>Workout Randomizer</h1>
      {visibleMenu && <SelectMenu onSetWorkout={setWorkoutHander} />}
      <CardDeck cards={workoutDeck} />

    </div>
  );
}

export default App;
