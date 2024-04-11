function distanceFromHqInBlocks(location) {
    const headquarters = 42; 
    return Math.abs(location - headquarters);
}
function distanceFromHqInFeet(location){
  const feetPerBlock = 264; 
const blocks = Math.abs(location - 42);
return blocks * feetPerBlock;

}


function distanceTravelledInFeet(start, destination) {
const feetPerBlock = 264; 
const blocks = Math.abs(destination - start);
return blocks * feetPerBlock;
}

function calculatesFarePrice(start, destination) {
const feetPerBlock = 264;
const distance = Math.abs(destination - start) * feetPerBlock;

if (distance <= 400) {
  return 0;
}

if (distance <= 2000) {
  return (distance - 400) * 0.02;
}

if (distance > 2000 && distance <= 2500) {
  return 25;
}

return 'cannot travel that far';
}