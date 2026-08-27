export function AmbientBackground() {
  return (
    <div aria-hidden="true" className="ambient-background">
      {/* Technical grid */}
      <div className="ambient-grid" />

      {/* Top right glow */}
      <div className="ambient-glow-top" />

      {/* Center glow */}
      <div className="ambient-glow-center" />

      {/* Bottom left glow */}
      <div className="ambient-glow-bottom" />

      {/* Grain */}
      <div className="ambient-grain" />
    </div>
  );
}
