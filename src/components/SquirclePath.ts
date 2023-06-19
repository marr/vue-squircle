type SquirclePath = {
  id: string;
  width: number;
  height: number;
  r1: number;
  r2: number;
};

function getSquirclePath(w: number, h: number, r1: number, r2: number) {
  r1 = Math.min(r1, r2);
  return `
    M 0,${r2}
    C 0,${r1} ${r1},0 ${r2},0
    L ${w - r2},0
    C ${w - r1},0 ${w},${r1} ${w},${r2}
    L ${w},${h - r2}
    C ${w},${h - r1} ${w - r1},${h} ${w - r2},${h}
    L ${r2},${h}
    C ${r1},${h} 0,${h - r1} 0,${h - r2}
    L 0,${r2}
  `
    .trim()
    .replace(/\n/g, " ");
}

export default function SquirclePath({ id, width, height, r1, r2 }: SquirclePath) {
  const path = getSquirclePath(width, height, r1, r2);
  return `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="${width}"
      height="${height}"
      viewBox="0 0 ${width} ${height}"
    >
      <defs>
        <clipPath id="${id}"><path fill="#000" d="${path}" /></clipPath>
      </defs>
      <g clip-path="url(#${id})">
        <rect width="${width}" height="${height}" fill="#000" />
      </g>
    </svg>
  `;
}
