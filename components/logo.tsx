export function TridentIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Center prong */}
      <polygon points="12,2 10,8 14,8" />
      <rect x="11" y="8" width="2" height="12" rx="0.5" />
      {/* Left prong */}
      <polygon points="6,6 4,12 8,12" />
      <rect x="5" y="12" width="2" height="4" rx="0.5" />
      {/* Right prong */}
      <polygon points="18,6 16,12 20,12" />
      <rect x="17" y="12" width="2" height="4" rx="0.5" />
      {/* Crossbar */}
      <rect x="4" y="15.5" width="16" height="1.5" rx="0.75" />
    </svg>
  )
}
