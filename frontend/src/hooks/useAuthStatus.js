import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

export const useAuthStatus = () => {
  const [loggedIn, setLoggedin] = useState(false)
  const [checkStatus, setCheckStatus] = useState(true)

  const { user } = useSelector((state) => state.auth)

  useEffect(() => {
    if (user) {
      setLoggedin(true)
    } else {
      setLoggedin(false)
    }
    setCheckStatus(false)
  }, [user])

  return { loggedIn, checkStatus }
}
