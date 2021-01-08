// https://app.codesignal.com/arcade/intro/level-9/xHvruDnQCx7mYom3T

function growingPlant(upSpeed, downSpeed, desiredHeight) {
  // place to store days = 1
  let days = 1;
  // place to store day = upSpeed
  let dayHeight = upSpeed;
  // iterate while day < desiredValue
  while (dayHeight < desiredHeight) {
    // day = night + upSpeed
    dayHeight += upSpeed - downSpeed;
    // increment days
    days++;
  }
  // return days
  return days;
}

function growingPlant(upSpeed, downSpeed, desiredHeight) {
  if (upSpeed > desiredHeight) {
    return 1;
  }
  return Math.ceil(
    (desiredHeight - upSpeed) / (upSpeed - downSpeed) + 1
  );
}

function growingPlant(upSpeed, downSpeed, desiredHeight) {
  return upSpeed > desiredHeight
    ? 1
    : Math.ceil((desiredHeight - upSpeed) / (upSpeed - downSpeed)) +
        1;
}

const growingPlant = (upSpeed, downSpeed, desiredHeight) =>
  Math.max(
    Math.ceil((desiredHeight - upSpeed) / (upSpeed - downSpeed)),
    0
  ) + 1;

console.log(growingPlant(100, 10, 910), 10);
console.log(growingPlant(10, 9, 4), 1);
console.log(growingPlant(5, 2, 7), 2);
console.log(growingPlant(7, 3, 443), 110);
console.log(growingPlant(6, 5, 10), 5);
