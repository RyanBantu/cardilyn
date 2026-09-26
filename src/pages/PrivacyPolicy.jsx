import { Link } from 'react-router-dom'

const SUPPORT_EMAIL = 'bantu.ryan@gmail.com'

/**
 * Public privacy policy for Cardilyn iOS + Android (Play / App Store listing URL).
 */
export default function PrivacyPolicy() {
  return (
    <div className="privacy-page">
      <header className="privacy-top">
        <Link to="/" className="privacy-brand" aria-label="Cardilyn home">
          <img src="/cardilyn-icon.png" alt="" width={36} height={36} />
          <span>Cardilyn</span>
        </Link>
        <Link to="/" className="privacy-back">
          ← Home
        </Link>
      </header>

      <main className="privacy-main">
        <h1>Cardilyn Privacy Policy</h1>
        <p className="privacy-meta">
          Last updated: September 26, 2026 · Contact:{' '}
          <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
        </p>

        <section className="privacy-card">
          <h2>Overview</h2>
          <p>
            Cardilyn (“we”, “us”) is a personal organizer for family health information —
            medications, vitals, visits, Health sync, and optional clinician sharing. It is{' '}
            <strong>not</strong> a medical device and does not diagnose, treat, or provide
            clinical decision support. Always follow advice from a qualified clinician.
          </p>
          <p>
            This policy covers the Cardilyn mobile apps on <strong>iOS</strong> and{' '}
            <strong>Android</strong>, and related pages on this website (including privacy and
            account-deletion pages). Educational heart-anatomy content on the site is for
            learning only and is not medical advice.
          </p>
        </section>

        <section className="privacy-card">
          <h2>Account types</h2>
          <ul>
            <li>
              <strong>Family / patient accounts</strong> — create a shared family health space,
              invite members, log medications and vitals, schedule visits, and optionally sync
              health samples.
            </li>
            <li>
              <strong>Doctor accounts</strong> — register with identity and credential details,
              verify email, and (after review) connect with patients who approve access.
            </li>
          </ul>
        </section>

        <section className="privacy-card">
          <h2>How you sign in (logins)</h2>
          <p>
            Cardilyn uses <strong>Firebase Authentication</strong> (Google Firebase). You can
            create or access an account with:
          </p>
          <ul>
            <li>
              <strong>Email and password</strong> — you provide an email address and password.
              Passwords are handled by Firebase Auth (we do not store plaintext passwords on our
              own servers).
            </li>
            <li>
              <strong>Continue with Google</strong> — available on both iOS and Android. Google
              Sign-In returns an identity token that Firebase uses to create or sign into your
              Cardilyn account. We receive your Google account <strong>email</strong> and basic
              profile information Google provides for sign-in (such as display name). We do{' '}
              <strong>not</strong> receive your Google password.
            </li>
          </ul>
          <p>
            Doctor accounts may also complete <strong>email verification</strong> through
            Firebase Auth (a link sent to your inbox) as part of registration.
          </p>
          <p>
            You may be able to reset a forgotten email/password via Firebase Auth password-reset
            flows where enabled in the app. Google Sign-In accounts are recovered through your
            Google account.
          </p>
          <p>
            Signing out ends the local session. Deleting your account is described below and at{' '}
            <Link to="/delete-account/">Delete account</Link>.
          </p>
        </section>

        <section className="privacy-card">
          <h2>What we collect and store</h2>
          <h3>Account and profile</h3>
          <ul>
            <li>Email address</li>
            <li>Display name / first and last name you enter</li>
            <li>Account role (family/patient or doctor)</li>
            <li>
              Authentication identifiers from Firebase (and, for Google Sign-In, the linked Google
              account email / profile fields Firebase stores)
            </li>
            <li>Email-verification status for doctor registration</li>
          </ul>
          <h3>Family and sharing</h3>
          <ul>
            <li>Family membership, member list, and invite emails you send</li>
            <li>Email directory entries used to match invites to accounts</li>
          </ul>
          <h3>Health and care information you enter</h3>
          <ul>
            <li>Medications, doses, schedules, and taken/skipped logs</li>
            <li>
              Vitals and health logs (for example blood pressure, glucose, weight, pulse,
              temperature, notes, symptoms)
            </li>
            <li>Doctor contacts, appointments, and visit reminders</li>
            <li>Clinical notes and other records you choose to save</li>
            <li>
              Patient–doctor links and access requests you approve or decline
            </li>
          </ul>
          <h3>Optional device health sync</h3>
          <ul>
            <li>
              <strong>iOS — Apple Health / HealthKit</strong> (only after you connect and grant
              access): for example heart rate, steps, ECG summaries, and other types you allow
            </li>
            <li>
              <strong>Android — Health Connect</strong> (only after you connect and grant
              access): for example heart rate, steps, blood pressure, weight, and blood glucose
            </li>
          </ul>
          <p>
            HealthKit and Health Connect data stay on your device until you opt in and sync into
            Cardilyn. You can revoke access in system settings at any time.
          </p>
          <h3>Doctor verification</h3>
          <ul>
            <li>
              Identity and credential fields you submit (for example legal name, phone,
              registration/council details, specialty, workplace)
            </li>
            <li>Optional profile photo</li>
            <li>Review status and related notes</li>
          </ul>
          <h3>Device and app technical data</h3>
          <ul>
            <li>On-device Firestore cache for offline use</li>
            <li>Local notification / reminder schedules for medications and visits</li>
            <li>
              Standard Firebase / Google Cloud operational data needed to run Authentication and
              Firestore (for example account IDs, timestamps)
            </li>
          </ul>
          <p>
            Cardilyn does <strong>not</strong> use advertising ID for ads. We removed advertising
            ID collection from the Android app. We do not sell your health data.
          </p>
        </section>

        <section className="privacy-card">
          <h2>Where data is stored</h2>
          <ul>
            <li>
              <strong>Firebase Authentication</strong> and <strong>Cloud Firestore</strong>{' '}
              (Google Firebase / Google Cloud)
            </li>
            <li>On-device Firestore cache and local reminder schedules</li>
            <li>
              Apple Health and Health Connect keep their own copies on device until you sync
              selected samples into Cardilyn
            </li>
          </ul>
        </section>

        <section className="privacy-card">
          <h2>How we use data</h2>
          <ul>
            <li>Authenticate you and keep you signed in securely</li>
            <li>Provide your shared family health workspace</li>
            <li>Schedule medication and visit reminders on your device</li>
            <li>Show synced HealthKit / Health Connect samples you allow</li>
            <li>Generate PDF health reports you choose to create</li>
            <li>
              Support doctor registration, email verification, review, and patient–doctor access
              you approve
            </li>
            <li>Respond to support and account-deletion requests</li>
          </ul>
        </section>

        <section className="privacy-card">
          <h2>Sharing</h2>
          <ul>
            <li>
              <strong>Family members</strong> you invite can view and edit shared family health
              data in that space
            </li>
            <li>
              <strong>Approved clinicians</strong> you connect may access records you authorize
            </li>
            <li>
              <strong>Share sheet</strong> (Email, WhatsApp, Files, etc.) — when you export a
              report, you choose the destination; that copy is outside Cardilyn
            </li>
            <li>
              <strong>Service providers:</strong> Google Firebase (Auth, Firestore); Apple
              (HealthKit on iOS); Google Health Connect on Android. They process data under their
              terms to provide those services
            </li>
            <li>
              <strong>Website contribution form</strong> (on this site) may use FormSubmit to
              deliver messages to {SUPPORT_EMAIL}; that form is separate from mobile account
              health data
            </li>
          </ul>
          <p>We do not sell personal or health data to data brokers or advertisers.</p>
        </section>

        <section className="privacy-card">
          <h2>Your choices and rights</h2>
          <ul>
            <li>Edit or delete logs and records inside the app</li>
            <li>Leave or be removed from a family</li>
            <li>
              Disconnect Apple Health (iOS Settings → Privacy &amp; Security → Health) or revoke
              Health Connect access on Android
            </li>
            <li>
              Delete your account in <strong>Settings → Delete account</strong>, or follow{' '}
              <Link to="/delete-account/">delete-account instructions</Link> (including email
              request). Verified deletion requests are handled within 30 days
            </li>
            <li>Sign out to end the local session</li>
          </ul>
        </section>

        <section className="privacy-card">
          <h2>Data retention</h2>
          <p>
            We keep account and family health data while your account is active so the app can
            work. After you delete your account (or we complete a verified deletion request), we
            remove associated Firebase Auth and Cardilyn Firestore data as described on the{' '}
            <Link to="/delete-account/">delete account</Link> page, except limited records we may
            need to keep temporarily for security, abuse prevention, or legal obligations, and
            copies you already shared outside the app.
          </p>
        </section>

        <section className="privacy-card">
          <h2>Children</h2>
          <p>
            Cardilyn is intended for adults managing family health information. It is not directed
            at children under 13 (or the minimum age required in your country). Do not create an
            account for a child with Google Sign-In or email if local law requires parental
            consent you cannot provide.
          </p>
        </section>

        <section className="privacy-card">
          <h2>Security</h2>
          <p>
            We use Firebase Authentication and Google Cloud infrastructure with industry-standard
            protections. No method of transmission or storage is 100% secure; please use a strong
            password for email accounts and protect your device lock screen.
          </p>
        </section>

        <section className="privacy-card">
          <h2>Changes</h2>
          <p>
            We may update this policy from time to time. The “Last updated” date at the top will
            change when we do. Continued use of Cardilyn after an update means you accept the
            revised policy.
          </p>
        </section>

        <section className="privacy-card">
          <h2>Contact</h2>
          <p>
            Privacy questions or requests:{' '}
            <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
          </p>
          <p>
            Account deletion help:{' '}
            <Link to="/delete-account/">www.cardilyn.com/delete-account/</Link>
          </p>
        </section>

        <p className="privacy-footer-note">
          Operator contact: {SUPPORT_EMAIL}. Cardilyn mobile apps (iOS and Android) and this
          website’s privacy / deletion pages are covered by this policy.
        </p>
      </main>
    </div>
  )
}
