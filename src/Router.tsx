import { Route, Routes } from 'react-router-dom'

import { SignIn } from './pages/signIn'
import { SignOut } from './pages/signOut'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/register" element={<SignOut />} />
    </Routes>
  )
}
