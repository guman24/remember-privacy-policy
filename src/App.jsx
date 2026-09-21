const EFFECTIVE_DATE = 'September 22, 2026'
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
            there's no account, your notes live on your device, we collect only anonymous usage
            statistics (which you can turn off), and nothing is sold or shared for advertising.
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
            <p>
              The one thing that does leave your device on its own is anonymous usage
              information, described in the next section.
            </p>
          </section>

          <section>
            <h2>Anonymous Usage Analytics</h2>
            <p>
              To understand which features are used and to find problems, the app uses Google
              Firebase Analytics. It records things like which screens are opened and which
              actions are taken (for example, that a reminder was saved, that voice input was
              used, or that a task was completed or deleted), along with simple yes/no values or
              counts about those actions.
            </p>
            <p><strong>This never includes:</strong> the text of your notes, their titles, dates
              or times, your due date or pregnancy week, or anything you say into the microphone.</p>
            <p>
              Like most analytics tools, Firebase also receives some technical information about
              the app and device, such as a random identifier for the app installation, the app
              version, device model, operating system version, language, and approximate location
              derived from your network connection (for example, country). This is not linked to
              your name, email, or any account, because we don't have any.
            </p>
            <p>
              We use this information only to improve the app. We do not use it for advertising
              and we do not combine it with your notes. Google processes it under{' '}
              <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">Firebase's privacy information</a>{' '}
              and{' '}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google's Privacy Policy</a>.
            </p>
            <p>
              <strong>You can turn this off at any time:</strong> in the app, go to
              Settings &rarr; Privacy and switch off "Share anonymous usage". Collection stops
              immediately.
            </p>
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
              <li><strong>Google Gemini API (only when needed):</strong> most notes are understood entirely on your device. Only when a note's wording can't be understood on-device (for example, "end of the month"), and only after you tap Continue, the beginning of that note (up to 300 characters) is sent to Google's Gemini API solely to work out a date, time, and short title. The review screen tells you which method was used ("Read on your device" or "Read with smart assist"). Google processes this text under its own privacy terms. We do not use this text for advertising, and we do not store it on any server of our own — it is used only to generate the extracted result, which is then saved on your device.</li>
            </ul>
            <p>If the on-device extraction is used, no note content ever leaves your device.</p>
          </section>

          <section>
            <h2>Voice Input</h2>
            <p>
              If you choose to speak a note, the app uses your phone's built-in speech
              recognition. Depending on your device and settings, your operating system provider
              (Apple on iPhone, Google on Android) may process the audio to turn it into text,
              under its own privacy terms. We do not receive, store, or keep recordings. The
              microphone is only used while you're actively dictating, and only after you've
              given permission.
            </p>
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
              <li>We don't track you across other apps or websites</li>
              <li>We don't use analytics for advertising, and we don't send your notes to analytics</li>
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
            <p>
              Anonymous usage statistics are not tied to your name or any account, so they can't be
              looked up or removed for an individual. To stop them, switch off "Share anonymous
              usage" in Settings &rarr; Privacy.
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
