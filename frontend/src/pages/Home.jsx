import { useAuth0 } from "@auth0/auth0-react"

export default function Home() {
  const { loginWithRedirect } = useAuth0()

  return (
    <div>
      {/* Hero Section */}
      <section
        className="d-flex flex-column justify-content-center align-items-center text-center vh-100"
        style={{
          background: "linear-gradient(135deg, #f8fafc, #e0f2fe)",
          padding: "2rem",
        }}
      >
        <img
          src="/public/logo.png"
          alt="Voice Vault Logo"
          width="110"
          height="90"
          className="mb-3"
        />

        <h1 className="fw-bold display-3 mb-3">Voice Vault</h1>
        <p className="lead text-muted mb-4 fs-4">
          Your voice, your notes.<br />
          <span className="fw-semibold">Fast. Secure. Intelligent.</span>
        </p>

        <div className="d-flex gap-3">
          <button
            className="btn btn-primary btn-lg px-4"
            onClick={() => loginWithRedirect()}
          >
            Login
          </button>
          <button
            className="btn btn-success btn-lg px-4"
            onClick={() =>
              loginWithRedirect({
                authorizationParams: { screen_hint: "signup" },
              })
            }
          >
            Register
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-5">
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm p-4 border-0 h-100">
              <div className="mb-3 fs-2">🎤</div>
              <h5 className="fw-bold">Voice to Text</h5>
              <p className="text-muted">
                Upload audio or record live and get instant text notes powered
                by AI.
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow-sm p-4 border-0 h-100">
              <div className="mb-3 fs-2">🔒</div>
              <h5 className="fw-bold">Secure & Private</h5>
              <p className="text-muted">
                Your data is encrypted and stored safely. You control your
                information.
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow-sm p-4 border-0 h-100">
              <div className="mb-3 fs-2">⚡</div>
              <h5 className="fw-bold">Fast & Easy</h5>
              <p className="text-muted">
                Minimal clicks, modern design, and a seamless note-taking
                experience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
