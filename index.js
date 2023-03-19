// code your solution here
function superbowlWin(record){
  let found = record.find((element) => element.result === "W");
  
  if (found !== undefined){
    return found.year;
  }

  return found;
}