export default function SynapseField({ className = "" }: { className?: string }) {
  const nodes = [
    { x: 60, y: 40 }, { x: 180, y: 90 }, { x: 90, y: 170 }, { x: 260, y: 60 },
    { x: 320, y: 160 }, { x: 210, y: 220 }, { x: 40, y: 260 }, { x: 380, y: 90 },
    { x: 150, y: 280 }, { x: 350, y: 240 },
  ];
  const edges = [
    [0, 1], [1, 2], [1, 3], [3, 4], [4, 5], [2, 5], [2, 6], [5, 8],
    [3, 7], [4, 9], [7, 4], [6, 8],
  ];

  return (
    <svg
      className={className}
      viewBox="0 0 420 320"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke="#0056D2"
          strokeWidth="1"
          opacity="0.16"
        />
      ))}
      {nodes.map((n, i) => (
        <circle key={i} cx={n.x} cy={n.y} r={i % 3 === 0 ? 3.5 : 2.5} fill="#0056D2" opacity="0.28" />
      ))}
    </svg>
  );
}
