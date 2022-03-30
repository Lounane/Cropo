const Image_Icon = ({ size = '100%' }) => (
  <svg
    // xmlns="http://www.w3.org/2000/svg"
    //   class="icon icon-tabler icon-tabler-photo"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="url(#gradientc)"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <defs>
      <linearGradient
        id="gradientc"
        x1={0}
        y1={1}
        x2={1}
        y2={0}
        // gradientTransform="rotate(-45)"
      >
        <stop offset="0%" stopColor="#7c3aed" stopOpacity={1} />
        <stop offset="100%" stopColor="#7c3aed" stopOpacity={0} />
      </linearGradient>
    </defs>
    <rect x="4" y="4" width="16" height="16" rx="3" />
    <path d="M4 15l4 -4a3 5 0 0 1 3 0l5 5" />
    <path d="M14 14l1 -1a3 5 0 0 1 3 0l2 2" />
  </svg>
)

export default Image_Icon
