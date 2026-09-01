export default function Disclaimer() {
  return (
    <aside className="disclaimer" role="note" aria-label="Medical disclaimer">
      <div className="disclaimer-inner">
        <span className="disclaimer-icon" aria-hidden="true">⚕</span>
        <p>
          <strong>Educational use only.</strong> This reference was compiled through
          self-directed research and is not medical advice. Always consult a qualified{' '}
          <strong>cardiologist</strong> for diagnosis and treatment. Do not use this site
          as a primary reference for self-treatment.
        </p>
      </div>
    </aside>
  )
}
