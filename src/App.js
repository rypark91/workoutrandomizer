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
var deckCopy;
var deck;

function init(){
  deck = [];
  deckCopy = [];
  
}

//work out shuffling functions
function shuffleChest(length, arr1, arr2){
  for(var j  = 0; j < chestData.length; j++){
    //copys chest data into a deck copy
      deckCopy.push(chestData[j]);
  }
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
function shuffleBack(length, arr1, arr2){
  for(var j  = 0; j < backData.length; j++){
      deckCopy.push(backData[j]);
  }
  var i = 1;
  while(i <= length){
    //randomly selects a back workout, removes it from the deck copy
    //and pushes the workout in the real deck
      var num = Math.floor(Math.random() * arr1.length);
      arr2.push(arr1[num]);
      arr1.splice(num, 1);
      i++;
  }
}
function shuffleLeg(length, arr1, arr2){
  //copys leg data into a deck copy
  for(var j  = 0; j < legData.length; j++){
      deckCopy.push(legData[j]);
  }
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
function shuffleFrontSideShoulders(length, arr1, arr2){
  //copys front side shoulders data into a deck copy
  for(var j  = 0; j < frontSideShoulderData.length; j++){
      deckCopy.push(frontSideShoulderData[j]);
  }
  var i = 1;
  while(i <= length){
    //randomly selects a front and side shoulder workout, removes it from the deck copy
    //and pushes the workout in the real deck
      var num = Math.floor(Math.random() * arr1.length);
      arr2.push(arr1[num]);
      arr1.splice(num, 1);
      i++;
  }
}
function shuffleRearShoulders(length, arr1, arr2){
  //copys rear shoulders data into a deck copy
  for(var j  = 0; j < rearShoulderData.length; j++){
      deckCopy.push(rearShoulderData[j]);
  }
  var i = 1;
  while(i <= length){
    //randomly selects a rear shoulders workout, removes it from the deck copy
    //and pushes the workout in the real deck
      var num = Math.floor(Math.random() * arr1.length);
      arr2.push(arr1[num]);
      arr1.splice(num, 1);
      i++;
  }
}
function shuffleBicep(length, arr1, arr2){
  //copys bicep data into a deck copy
  for(var j  = 0; j < bicepData.length; j++){
      deckCopy.push(bicepData[j]);
  }
  var i = 1;
  while(i <= length){
    //randomly selects a bicep workout, removes it from the deck copy
    //and pushes the workout in the real deck
      var num = Math.floor(Math.random() * arr1.length);
      arr2.push(arr1[num]);
      arr1.splice(num, 1);
      i++;
  }
}
function shuffleTricep(length, arr1, arr2){
  //copys tricep data into a deck copy
  for(var j  = 0; j < tricepData.length; j++){
      deckCopy.push(tricepData[j]);
  }
  var i = 1;
  while(i <= length){
    //randomly selects a tricep workout, removes it from the deck copy
    //and pushes the workout in the real deck
      var num = Math.floor(Math.random() * arr1.length);
      arr2.push(arr1[num]);
      arr1.splice(num, 1);
      i++;
  }
}
function shuffleAb(length, arr1, arr2){
  //copys ab data into a deck copy
  for(var j  = 0; j < abData.length; j++){
      deckCopy.push(abData[j]);
  }
  var i = 1;
  while(i <= length){
    //randomly selects a ab workout, removes it from the deck copy
    //and pushes the workout in the real deck
      var num = Math.floor(Math.random() * arr1.length);
      arr2.push(arr1[num]);
      arr1.splice(num, 1);
      i++;
  }
}
function shufflePush(){
  shuffleChest(3,deckCopy,deck);
  deckCopy = [];
  shuffleFrontSideShoulders(2,deckCopy,deck);
  deckCopy = [];
  shuffleTricep(2, deckCopy, deck);
}
function shufflePull(){
  shuffleBack(3,deckCopy,deck);
  deckCopy = [];
  shuffleRearShoulders(2,deckCopy,deck);
  deckCopy = [];
  shuffleBicep(2, deckCopy, deck);
}
init();


function App() {

  const [visibleMenu, setVisibleMenu] = useState(true);
  const [workoutDeck, setDeck] = useState([]);
  const setWorkoutHander = (workoutData) => {
    
    if(workoutData.workout === 'chest'){
      shuffleChest(6,deckCopy,deck);
    }
    else if(workoutData.workout === 'back'){
      shuffleBack(6,deckCopy,deck);
    }
    else if(workoutData.workout === 'leg'){
      shuffleLeg(6,deckCopy,deck);
    }
    else if(workoutData.workout === 'frontsideshoulder'){
      shuffleFrontSideShoulders(6,deckCopy,deck);
    }
    else if(workoutData.workout === 'rearshoulder'){
      shuffleRearShoulders(6,deckCopy,deck);
    }
    else if(workoutData.workout === 'bicep'){
      shuffleBicep(6,deckCopy,deck);
    }
    else if(workoutData.workout === 'tricep'){
      shuffleTricep(6,deckCopy,deck);
    }
    else if(workoutData.workout === 'push'){
      shufflePush();
    }
    else if(workoutData.workout === 'pull'){
      shufflePull();
    }
    if(workoutData.ab){
      deckCopy = [];
      shuffleAb(3,deckCopy, deck);
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
