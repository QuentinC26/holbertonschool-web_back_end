export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

export function getLast() {
  let okay = ' is okay'
  return okay;
}

export function taskNext() {
  var combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
