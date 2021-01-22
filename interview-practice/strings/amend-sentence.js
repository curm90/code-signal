// https://app.codesignal.com/interview-practice/task/yXDg4rAk9ooEjLjdj/description

function amendTheSentence(s) {
  return s
    .split(/(?=[A-Z])/)
    .join(' ')
    .toLowerCase();
}

console.log(
  amendTheSentence('CodesignalIsAwesome'),
  'codesignal is awesome'
);
