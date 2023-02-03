
export function getRU() {
  const beginning = ['500lb','lil', 'big', 'wet', 'muh', '', 'ol', 'flashy', 'eternal', 'el_', 'hyper', 'mega', 'pro', 'neo','extra'];
  const middle = ['squig', 'ham', 'block', 'bag', 'mint', 'fro', 'drop', 'chromie', 'vibe', 'gm', 'bulb'];
  const end = ['zilla', 'osapien', 'zz', '4lyfe','', 'ooor', 'thang', 'magnet', 'tastic','asaurus','tron'];

  const randomBeginning = beginning[Math.floor(Math.random() * beginning.length)];
  const randomMiddle = middle[Math.floor(Math.random() * middle.length)];
  const randomEnd = end[Math.floor(Math.random() * end.length)];
  return `${randomBeginning}${randomMiddle}${randomEnd}`;
}
