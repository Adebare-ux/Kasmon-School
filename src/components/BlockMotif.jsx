const COLORS = ['#D4A24C', '#F2B84B']

/**
 * Renders `count` stacked blocks of increasing height, echoing the
 * "Babies Are Builders" motto. Used in the level cards and the
 * Montessori feature panel.
 */
export default function BlockMotif({ count = 3, width = 220, height = 140 }) {
  const blockWidth = 34
  const gap = 16
  const totalWidth = count * blockWidth + (count - 1) * gap
  const startX = (width - totalWidth) / 2

  return (
    <svg viewBox={`0 0 ${width} ${height}`} width={width} height={height}>
      {Array.from({ length: count }).map((_, i) => {
        const h = height * (0.3 + (i / Math.max(count - 1, 1)) * 0.55)
        const x = startX + i * (blockWidth + gap)
        const y = height - h
        return (
          <rect
            key={i}
            x={x}
            y={y}
            width={blockWidth}
            height={h}
            rx="6"
            fill={COLORS[i % COLORS.length]}
          />
        )
      })}
    </svg>
  )
}
