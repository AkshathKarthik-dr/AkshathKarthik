export default function PulseDivider({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`pulse-divider ${className}`}
      viewBox="0 0 400 28"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d="M0 14 H150 L165 4 L178 24 L192 14 H400" />
    </svg>
  );
}
