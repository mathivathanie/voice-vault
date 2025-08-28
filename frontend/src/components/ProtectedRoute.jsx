import { useAuth0 } from '@auth0/auth0-react'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading } = useAuth0()

  if (isLoading) return <p className="text-center">Loading...</p>
  if (!isAuthenticated) return <Navigate to="/login" />
  return children
}
