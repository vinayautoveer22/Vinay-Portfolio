/**
 * Global ambient background
 * Soft pastel blobs + dotted grid + subtle floating particles.
 */

export default function Ambient() {
  // Spread the blinking points across the full ambient layer so they stay
  // visible behind every section while the page scrolls.
  const particles = Array.from({ length: 56 }, (_, index) => {
    const column = index % 8
    const row = Math.floor(index / 8)

    return {
      left: `${2 + column * 12 + ((index * 17) % 7)}%`,
      top: `${3 + row * 13 + ((index * 11) % 8)}%`,
      size: index % 4 === 0 ? 4 : 3,
      delay: `${((index * 7) % 36) / 10}s`,
      duration: `${7 + (index % 7) / 2}s`,
    }
  })

  return (
    <div className="ambient" aria-hidden="true">
      {/* Soft pastel background blobs */}
      <span className="blob blob-1" />
      <span className="blob blob-2" />
      <span className="blob blob-3" />
      <span className="blob blob-4" />

      {/* Tiny static background grid */}
      <span className="ambient-grid" />

      {/* Premium animated particles */}
      <div className="ambient-particles">
        {particles.map((particle, index) => (
          <span
            key={index}
            className="ambient-particle"
            style={{
              left: particle.left,
              top: particle.top,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: `${particle.delay}, ${particle.delay}`,
              animationDuration: `${particle.duration}, 3.6s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}
