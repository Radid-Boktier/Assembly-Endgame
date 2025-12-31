export default function StatusBar({ heading, description, gameStatusClass }) {
  return (
    <section aria-live="polite" role="status" className={gameStatusClass}>
      <h1 className="status-heading">{heading}</h1>
      <p className="status-description">{description}</p>
    </section>
  );
}
