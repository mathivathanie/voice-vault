import { Link } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react"

export default function Navbar() {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0()

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3 shadow-sm">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="/logo.png" // ✅ put logo.png in /public folder
            alt="Voice Vault Logo"
            width="85"
            height="70"
            className="me-2"
          />
          <span className="fw-bold">Voice Vault</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            {isAuthenticated && (
              <li className="nav-item">
                <Link className="nav-link" to="/app">Dashboard</Link>
              </li>
            )}
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-2">
            {!isAuthenticated ? (
              <>
                <button
                  className="btn btn-outline-primary"
                  onClick={() => loginWithRedirect()}
                >
                  Login
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() =>
                    loginWithRedirect({
                      authorizationParams: { screen_hint: "signup" },
                    })
                  }
                >
                  Register
                </button>
              </>
            ) : (
              <>
                {user?.picture && (
                  <img
                    src={user.picture}
                    alt={user.name}
                    className="rounded-circle"
                    width="35"
                    height="35"
                  />
                )}
                <button
                  className="btn btn-outline-danger"
                  onClick={() =>
                    logout({ logoutParams: { returnTo: window.location.origin } })
                  }
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
