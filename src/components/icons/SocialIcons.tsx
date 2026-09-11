interface IconProps {
  size?: number
  className?: string
}

export function InstagramIcon({ size = 16, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" />
    </svg>
  )
}

export function FacebookIcon({ size = 16, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M15 8.5h2V5.2c-.35-.05-1.55-.16-2.95-.16-2.92 0-4.92 1.78-4.92 5.06V13H6.5v3.7h2.63V22h3.77v-5.3h2.52l.4-3.7h-2.92v-2.5c0-1.07.29-1.8 1.8-1.8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function TikTokIcon({ size = 16, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M14 3.5c.5 2.2 2.1 3.7 4.3 3.9v2.9c-1.5.1-2.9-.4-4.3-1.3v6.1a5.3 5.3 0 1 1-5.3-5.3c.3 0 .6 0 .9.07v2.9a2.5 2.5 0 1 0 1.7 2.36V3.5H14Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  )
}
