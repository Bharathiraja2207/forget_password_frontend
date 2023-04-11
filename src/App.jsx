import { useState } from 'react'
import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Signin, Login } from './Signin';
import { Sendotp, Verifyotp } from './Sendotp';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
<Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forget-password" element={<Sendotp />} />
        <Route path="/verify" element={<Verifyotp />} />
        <Route path="/url-Shortening" element={<ProtectedRoute> <Shorturl/></ProtectedRoute>} />
      </Routes>
    </div>
  )
}


function ProtectedRoute({ children }) {
  const token = localStorage.getItem('token');
  // const token=false;
  return (
    token ? <section>{children}</section> : <Navigate replace to="/" />
    //  token? <section>{children}</section>:<h1>unautharaied</h1>
  )
}

function Shorturl(){
  const navigate = useNavigate()


  const handleClick = () => {
    localStorage.removeItem('token');
    setTimeout(() => {
      navigate("/login")
    }, 1500);
    console.log("logout")
  }

  return(
    <div className='parrent'>
      <Button onClick={handleClick} variant="contained">LOGOUT</Button>
      <Card sx={{ maxWidth: 500 }}>
      <CardContent>
      <img src='https://media.istockphoto.com/id/1392896428/photo/inspirational-quote.jpg?s=612x612&w=0&k=20&c=CbqPLlx65768zd6QQpJqo55MZIAhA_o68cS0nLIfjw0='></img>
    </CardContent>
    </Card>
  </div>
  )
}




