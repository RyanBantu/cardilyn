import { useState } from 'react'

const TOPICS = [
  'General anatomy',
  'Valves & cardiac cycle',
  'Coronary arteries',
  'Cardiac veins',
  'Calcifications',
  'Clinical context',
  'Correction or clarification',
  'Other',
]

const EMAIL = 'bantu.ryan@gmail.com'

export default function ContributionForm() {
  const [form, setForm] = useState({ name: '', email: '', topic: TOPICS[0], message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const update = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const mailtoHref = () => {
    const subject = encodeURIComponent(`Heart Anatomy Contribution, ${form.topic}`)
    const body = encodeURIComponent(
      `Name: ${form.name || '(not provided)'}\nEmail: ${form.email}\nTopic: ${form.topic}\n\n${form.message}`
    )
    return `mailto:${EMAIL}?subject=${subject}&body=${body}`
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.email.trim() || !form.message.trim()) return

    setStatus('sending')
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name || 'Anonymous',
          email: form.email,
          topic: form.topic,
          message: form.message,
          _subject: `Heart Anatomy Contribution, ${form.topic}`,
          _template: 'table',
        }),
      })
      if (!res.ok) throw new Error('submit failed')
      setStatus('success')
      setForm({ name: '', email: '', topic: TOPICS[0], message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contribute" className="contribute-section">
      <h2>Contribute to this reference</h2>
      <p className="lede">
        Know something that should be added, corrected, or expanded? Share it below. Your
        submission goes directly to the maintainer at{' '}
        <a href={`mailto:${EMAIL}`} className="email-link">
          {EMAIL}
        </a>
        .
      </p>

      <form className="contrib-form" onSubmit={handleSubmit} noValidate>
        <div className="form-row">
          <label>
            <span>Your name</span>
            <input
              type="text"
              name="name"
              placeholder="Optional"
              value={form.name}
              onChange={update('name')}
              autoComplete="name"
            />
          </label>
          <label>
            <span>
              Email <em>(required)</em>
            </span>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={update('email')}
              required
              autoComplete="email"
            />
          </label>
        </div>

        <label>
          <span>Topic</span>
          <select name="topic" value={form.topic} onChange={update('topic')}>
            {TOPICS.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </label>

        <label>
          <span>
            Your contribution <em>(required)</em>
          </span>
          <textarea
            name="message"
            rows={6}
            placeholder="Describe the anatomy, correction, source, or context you'd like to add…"
            value={form.message}
            onChange={update('message')}
            required
          />
        </label>

        <div className="form-actions">
          <button type="submit" className="btn-primary" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send contribution'}
          </button>
          <a href={mailtoHref()} className="btn-secondary">
            Open in email app
          </a>
        </div>

        {status === 'success' && (
          <p className="form-feedback success" role="status">
            Thank you. Your contribution was sent successfully.
          </p>
        )}
        {status === 'error' && (
          <p className="form-feedback error" role="alert">
            Could not send automatically. Use &ldquo;Open in email app&rdquo; instead, or
            email{' '}
            <a href={`mailto:${EMAIL}`} className="email-link">
              {EMAIL}
            </a>{' '}
            directly.
          </p>
        )}
      </form>

      <p className="contrib-note">
        Submissions are reviewed manually. Including a textbook, paper, or clinical source
        helps verify additions. This site remains educational and is not a substitute for
        professional medical care.
      </p>
    </section>
  )
}
