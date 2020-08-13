export const SESSION_STORAGE_KEY = 'alignment-test';
export const ALIGNMENT_KEYS = {
  LX: 'lx',
  NX: 'nx',
  CX: 'cx',
  XG: 'xg',
  XN: 'xn',
  XE: 'xe',
};

export const ALIGNMENT_ABR: T_ALIGNMENT_ABR = {
  LG: 'lg',
  NG: 'ng',
  CG: 'cg',
  LN: 'ln',
  NN: 'nn',
  CN: 'cn',
  LE: 'le',
  NE: 'ne',
  CE: 'ce',
};

type T_ALIGNMENT_ABR = { [key: string]: string };
export const HEADING_KEYS = {
  lg: 'Lawful Good',
  ng: 'Neutral Good',
  cg: 'Chaotic Good',
  ln: 'Lawful Neutral',
  nn: 'True Neutral',
  cn: 'Chaotic Neutral',
  le: 'Lawful Evil',
  ne: 'Neutral Evil',
  ce: 'Chaotic Evil',
};

export const RESULTS = `
<div class="graph-container">
  <div>
      <h3>Alignment:</h3>
      <canvas width="250%" height="310%" id="alignment"></canvas> 
  </div>
  <div>
      <h3>Law & Chaos:</h3>
      <canvas width="250%" height="310%" id="law-chaos"></canvas> 
  </div>
  <div>
      <h3>Good & Evil</h3>
      <canvas width="250%" height="310%" id="good-evil"></canvas> 
  </div>
</div>
`;
