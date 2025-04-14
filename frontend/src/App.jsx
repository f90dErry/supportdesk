import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import PrivateRoute from './components/PrivateRoute'
import Home from './pages/Home'
import LogIn from './pages/LogIn'
import Register from './pages/Register'
import { ToastContainer } from 'react-toastify'
import NewTicket from './pages/NewTicket'

function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<LogIn />} />
            <Route path='/register' element={<Register />} />
            <Route path='/new-ticket' element={<PrivateRoute />}>
              <Route path='new-ticket' element={<NewTicket />} />
            </Route>
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
