import React from "react"
import "../styles/register.scss"
import axios from "axios"
import {SignUp} from "./signup/signup"
const Register : React.FC = () => {
  const verifyNumber = (e:any) => {
    e.preventDefault()
    const val = {tel:e.target[0].value}
    axios.post("http://localhost:5000/verify/phone",val)
    .then((res)=>{
      console.log(res)
    })
  }
  function verifyOtp(e:any) {
    e.preventDefault()
    var opt = {otp:e.target[0].value}
    axios.post("http://localhost:5000/verify/otp",opt)
    .then((res)=>{
      console.log(res.status)
    })
  }
  return (
      <main className="register">
      <form method="post" onSubmit={(e) => {
      verifyNumber(e)
      }}>
       <input type="tel" id="tel" name="tel"></input>
       <input type="submit"></input>
      </form>
      <form method="post" onSubmit={(e)=>{
       verifyOtp(e)
      }}>
      <input type="tel" id="otp" name="otp"></input>
      <input type="submit"></input>
      </form>
      <SignUp/>
      </main>
    )
}
export default Register