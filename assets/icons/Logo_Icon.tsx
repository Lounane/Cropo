const Logo_Icon = ({ size = '100%' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="url(#gradient)"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <defs>
      <linearGradient id="gradient" gradientTransform="rotate(-45)">
        <stop offset="0%" stopColor="#7c3aed" />
        <stop offset="100%" stopColor="#7c3aed" stopOpacity={0} />
      </linearGradient>
    </defs>
    <path d="M8 5v10a1 1 0 0 0 1 1h10" />
    <path d="M5 8h10a1 1 0 0 1 1 1v10" />
  </svg>
)

export default Logo_Icon
