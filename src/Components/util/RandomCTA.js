export function getCTA() {
  // const beginning = ['EXPRESS YOURSELF','+ADD YOURS','Create'];
  const beginning = ['+','create','ADD','NEW'];

  const randomBeginning = beginning[Math.floor(Math.random() * beginning.length)];

  return `${randomBeginning}`;
}