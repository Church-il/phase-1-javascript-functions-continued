// code your solution here

function saturdayFun(activity = "roller-skate"){
  return `This Saturday, I want to ${activity}!`;
}
console.log(saturdayFun(activity = "roller-skate"));

function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};
console.log(mondayWork());
console.log(mondayWork("jump"));

function wrapAdjective(flair = "*") {
  return function(adjective = "special") {
    return `You are ${flair}${adjective}${flair}!`;
  };
}
