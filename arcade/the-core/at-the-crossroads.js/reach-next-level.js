// https://app.codesignal.com/arcade/code-arcade/at-the-crossroads/m9wjpkCjgofg7gs8N

function reachNextLevel(experience, threshold, reward) {
  return experience + reward >= threshold;
}

console.log(reachNextLevel(10, 15, 5), true);
