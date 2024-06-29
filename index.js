// code your solution here
// Defines the saturdayFun function with a default activity
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // Defines the mondayWork function with a default activity
  const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  }
  
  // Defines the wrapAdjective function which returns a function to wrap an adjective
  function wrapAdjective(wrapper = "*") {
    return function(adjective) {
      return `You are ${wrapper}${adjective}${wrapper}!`;
    };
  }