import React, { useContext } from 'react'
import { AuthContext } from '../../auth/authContext'

export const Login = () => {

  const {user} = useContext(AuthContext);
  return (
    <div> {user.name}</div>
  )
}