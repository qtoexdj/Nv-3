import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './AuthContext'

const ROLE_ROUTES = {
  'admin': '/admin',
  'user': '/user',
  'dev': '/dev'
}

export const RoleBasedRedirect = () => {
  const navigate = useNavigate()
  const { role, user } = useAuth()

  useEffect(() => {
    if (!user) {
      navigate('/login')
      return
    }

    const targetRoute = ROLE_ROUTES[role]
    if (targetRoute) {
      navigate(targetRoute)
    }
  }, [role, user, navigate])

  return null
}
