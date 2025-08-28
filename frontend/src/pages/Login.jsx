import { useAuth0 } from '@auth0/auth0-react'

export default function Login() {
  const { loginWithRedirect } = useAuth0()

  return (
    <div className="text-center">
      <h2 className="mb-3">Welcome to Voice Vault</h2>
      <p>Login or create a new account to continue.</p>

      <div className="d-flex justify-content-center gap-3 mt-4">
        <button
          className="btn btn-primary"
          onClick={() => loginWithRedirect()}
        >
          Login
        </button>

        <button
          className="btn btn-success"
          onClick={() => loginWithRedirect({ authorizationParams: { screen_hint: 'signup' } })}
        >
          Register
        </button>
      </div>
    </div>
  )
}
