import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import SignUp from './pages/SignUp'


import { useAuthContext } from './hooks/useAuthContext'

function App() {
  const { user } = useAuthContext()
  return (
    <>
      <Router>
        <div className="container-fluid p-0">
          <Routes>
            <Route path="/" element={ user ? <Dashboard /> : <Navigate to='/login' />}></Route>
            <Route path="/login" element={ !user ? <Login /> : <Navigate to='/' /> }></Route>
            <Route path="/sign-up" element={ !user ? <SignUp /> : <Navigate to='/' /> }></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
