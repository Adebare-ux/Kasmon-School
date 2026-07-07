const paths = {
  book: 'M4 19V6a2 2 0 0 1 2-2h5l2 2h5a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z',
  clock: 'M12 7v5l3 3',
  people:
    'M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75',
  arrow: 'M5 12h14M13 6l6 6-6 6',
  grad: 'M22 10 12 5 2 10l10 5 10-5ZM6 12v5c0 1.5 2.5 3 6 3s6-1.5 6-3v-5',
  heart:
    'M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z',
  screen: 'M3 4h18v14H3zM8 21h8M12 18v3',
  shield: 'M12 22s8-4.5 8-11V5l-8-3-8 3v6c0 6.5 8 11 8 11Z',
}

export default function Icon({ name, className = 'w-5 h-5', extraCircle }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      {extraCircle && <circle cx="12" cy="12" r="9" />}
      <path d={paths[name] || paths.book} />
    </svg>
  )
}
