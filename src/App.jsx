import MainRouting from './MainRouting'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export default function App() {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/emails/inbox')
  }, [])

  return <MainRouting />
}
