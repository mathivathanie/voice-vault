export default function About() {
  return (
    <div className="container">
      <div className="card shadow-sm p-4">
        <h2 className="mb-3">About Voice Vault</h2>
        <p>
          <strong>Voice Vault</strong> is a simple voice-to-notes application.
          You can upload audio files, transcribe them into text, and save them
          as notes. It also allows you to manually add notes, edit them, and
          delete them whenever needed.
        </p>

        <h4 className="mt-4">Features</h4>
        <ul>
          <li>🔑 Secure login and signup with Auth0</li>
          <li>🎙️ Upload audio and get automatic transcription</li>
          <li>📝 Add, view, and delete notes manually</li>
          <li>☁️ (Coming soon) Dropbox integration for storage</li>
        </ul>

        <h4 className="mt-4">Our Goal</h4>
        <p>
          We want to make note-taking effortless. Whether you're in a meeting,
          lecture, or just recording ideas, Voice Vault helps you turn audio
          into text instantly and organize your notes in one place.
        </p>
      </div>
    </div>
  )
}
