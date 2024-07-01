import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import LoginPage from './pages/login/LoginPage';
import SignupPage from './pages/signup/SignupPage';
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from './context/AuthContext';

function App() {
  const { authUser } = useAuthContext();
  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <Routes>
        <Route path='/' element={authUser ? <Home /> : <Navigate to={"login"} />} />
        <Route path='/login' element={authUser ? <Navigate to="/" /> : <LoginPage />} />
        <Route path='/signup' element={authUser ? <Navigate to="/" /> : <SignupPage />} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
