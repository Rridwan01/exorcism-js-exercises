export function frontDoorResponse(line) {
  return line[0];
}

export function frontDoorPassword(word) {
  const firstLetter = word[0];
  const restAfterFirst = word.slice(1,word.length);
  
  return firstLetter.toUpperCase() + restAfterFirst.toLowerCase();
}

export function backDoorResponse(line) {
  const trimmed = line.trim();
  const lastLetter = trimmed.slice(-1);
  
  return lastLetter;
}

export function backDoorPassword(word) {
  const firstLetter = word[0];
  const restAfterFirst = word.slice(1,word.length);
  
  const firstDoorPass = firstLetter.toUpperCase() + restAfterFirst.toLowerCase();
  
  return firstDoorPass + ', please';
}
