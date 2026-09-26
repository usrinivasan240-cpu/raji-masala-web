export default function Logo({ size = 44, light = false }: { size?: number; light?: boolean }) {
  const ring = light ? "#e3c15c" : "#c9a227";
  const text = light ? "#ffffff" : "#0a1f44";
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
      <svg width={size} height={size} viewBox="0 0 64 64" role="img" aria-label="RJ BUSINESS logo">
        <circle cx="32" cy="32" r="29" fill="none" stroke={ring} strokeWidth="3" />
        <ellipse cx="32" cy="32" rx="13" ry="29" fill="none" stroke={ring} strokeWidth="1.4" opacity="0.7" />
        <line x1="3" y1="32" x2="61" y2="32" stroke={ring} strokeWidth="1.4" opacity="0.7" />
        <path d="M6 22 Q32 30 58 22" fill="none" stroke={ring} strokeWidth="1.4" opacity="0.7" />
        <path d="M6 42 Q32 34 58 42" fill="none" stroke={ring} strokeWidth="1.4" opacity="0.7" />
        <circle cx="32" cy="32" r="17" fill={light ? "#0a1f44" : "#0a1f44"} stroke={ring} strokeWidth="2" />
        <text
          x="32"
          y="38.5"
          textAnchor="middle"
          fontFamily="Georgia, serif"
          fontWeight="700"
          fontSize="15"
          fill="#e3c15c"
        >
          RJ
        </text>
        <path d="M44 14 L54 8 L50 18 Z" fill={ring} />
      </svg>
      <span style={{ display: "grid", lineHeight: 1.1 }}>
        <b style={{ fontSize: size * 0.38, letterSpacing: 1.5, color: text }}>RJ BUSINESS</b>
        <small style={{ fontSize: size * 0.17, letterSpacing: 2.2, color: ring, fontWeight: 700 }}>
          CONNECT • SOURCE • EXPORT
        </small>
      </span>
    </span>
  );
}
