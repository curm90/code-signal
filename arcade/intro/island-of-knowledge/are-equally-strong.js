// https://app.codesignal.com/arcade/intro/level-5/g6dc9KJyxmFjB98dL

function areEquallyStrong(
  yourLeft,
  yourRight,
  friendsLeft,
  friendsRight
) {
  const yourMax = Math.max(yourLeft, yourRight);
  const yourMin = Math.min(yourLeft, yourRight);
  const friendsMax = Math.max(friendsLeft, friendsRight);
  const friendsMin = Math.min(friendsLeft, friendsRight);

  return yourMax === friendsMax && yourMin === friendsMin;
}

function areEquallyStrong(
  yourLeft,
  yourRight,
  friendsLeft,
  friendsRight
) {
  const yourTotal = yourLeft + yourRight;
  const friendsTotal = friendsLeft + friendsRight;

  return (
    (yourTotal === friendsTotal && yourRight === friendsRight) ||
    yourLeft === friendsRight
  );
}

console.log(areEquallyStrong(10, 15, 15, 10), true);
console.log(areEquallyStrong(15, 10, 15, 10), true);
console.log(areEquallyStrong(15, 10, 15, 9), false);
console.log(areEquallyStrong(10, 15, 5, 20), false);
