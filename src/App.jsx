const EFFECTIVE_DATE = 'September 4, 2026'
const SUPPORT_EMAIL = 'gumansing.dev@gmail.com'

function App() {
  return (
    <div className="page">
      <div className="container">
        <div className="brand">
          <span className="brand-dot" />
          <span className="brand-name">Remember - Pregnancy Companion</span>
        </div>

        <div className="card">
          <h1>Privacy Policy</h1>
          <p className="updated">Effective {EFFECTIVE_DATE}</p>

          <p className="intro">
            Remember - Pregnancy Companion is a gentle, note-first pregnancy reminder app. This policy explains
            what information the app handles, why, and the choices you have. The short version:
            there's no account, your notes live on your device, and nothing is sold or shared
            for advertising.
          </p>

          <section>
            <h2>Information We Collect</h2>
            <p>Remember This does not require you to create an account and does not collect your name, email address, or any other identifying information to use the app.</p>
            <p>The app stores the following directly on your device:</p>
            <ul>
              <li>The notes you type or speak, and the reminders created from them</li>
              <li>Your pregnancy due date</li>
              <li>Your notification preference</li>
              <li>Whether you've completed the app's onboarding</li>
            </ul>
            <p>None of this is transmitted to us or stored on any server we operate. We have no account system, so we have no way to identify who you are.</p>
          </section>

          <section>
            <h2>How Note Extraction Works</h2>
            <p>
              When you add a note, the app tries to figure out the date, time, and category
              behind what you wrote (for example, "doctor said blood test next Tuesday at 10am").
              This happens in one of two ways:
            </p>
            <ul>
              <li><strong>On-device only:</strong> by default, this extraction runs entirely on your device using built-in logic. Nothing about your note leaves your phone.</li>
              <li><strong>Google Gemini API (when configured):</strong> if this feature is enabled in a given build of the app, the text of the note you enter is sent to Google's Gemini API solely to extract a date, time, and category. Google processes this text under its own privacy terms. We do not use this text for advertising, and we do not store it on any server of our own — it is used only to generate the extracted result, which is then saved on your device.</li>
            </ul>
            <p>If the on-device extraction is used, no note content ever leaves your device.</p>
          </section>

          <section>
            <h2>Notifications</h2>
            <p>
              Reminders are scheduled as local, on-device notifications through your phone's
              operating system. We do not use a push notification server, and no reminder data
              is sent to us to make notifications work.
            </p>
          </section>

          <section>
            <h2>What We Don't Do</h2>
            <ul>
              <li>We don't include analytics or tracking SDKs</li>
              <li>We don't show ads or use ad networks</li>
              <li>We don't sell or share your information with third parties for marketing</li>
              <li>We don't require sign-up, sign-in, or any personal account</li>
            </ul>
          </section>

          <section>
            <h2>Your Choices &amp; Data Deletion</h2>
            <p>
              Because everything is stored on your device, you're always in control. You can
              delete all of your data at any time from Settings within the app — this removes
              your notes, due date, and preferences, and cancels any scheduled reminders.
              Uninstalling the app also removes all locally stored data.
            </p>
          </section>

          <section>
            <h2>Children's Privacy</h2>
            <p>
              Remember This is intended for expecting parents and is not directed at children.
              We do not knowingly collect information from children under 13.
            </p>
          </section>

          <section>
            <h2>Medical Disclaimer</h2>
            <p>
              Remember This helps you stay organized — it does not provide medical advice and
              is not a substitute for guidance from your doctor or midwife. If something feels
              urgent, please contact your healthcare provider directly.
            </p>
          </section>

          <section>
            <h2>Changes to This Policy</h2>
            <p>
              If this policy changes, we'll update the effective date above. Continued use of
              the app after a change means you accept the updated policy.
            </p>
          </section>

          <section>
            <h2>Contact Us</h2>
            <div className="contact-box">
              <p>
                Questions about this policy or your data? Reach out at{' '}
                <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
              </p>
            </div>
          </section>
        </div>

        <footer>© {new Date().getFullYear()} Remember This. All rights reserved.</footer>
      </div>
    </div>
  )
}

export default App
