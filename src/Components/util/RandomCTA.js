export function getCTA() {
  const beginning = ['EXPRESS YOURSELF','+ADD YOURS','Create'];

  const randomBeginning = beginning[Math.floor(Math.random() * beginning.length)];

  return `${randomBeginning}`;
}