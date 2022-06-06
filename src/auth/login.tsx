import React from "react";
import {signInWithPopup,GoogleAuthProvider,RecaptchaVerifier} from 'firebase/auth';
//import 'firebase/compat/firestore';
import {Auth} from "../config/firebase-config"
const Login : React.FC = () => {
  const [data ,setdata] = React.useState<any>()
  const loginWithGoogle = () => {
    const Googleprovider = new GoogleAuthProvider()
    signInWithPopup(Auth,Googleprovider)
    .then((res) => {
      setdata(res)
    })
  }
  /*
    phone authentication using firebase 
  */
  const requestOTP = (e:any) => {
    //e.preventDefault()
    (window as any).recaptchaVerifier = new RecaptchaVerifier('recaptcher-verifier', {
      'size': 'invisible',
      'callback': (response:any) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        //onSignInSubmit();
        console.log(response)
      }
      
    }, Auth);
  }
  return (
    <div>
    <button onClick={loginWithGoogle}>login with google</button>
    <button onClick={(e) => requestOTP(e)}>login with Email</button>
    <div id='recaptcher-verifier'></div>
    <div>{data} </div>
    </div>
    )
}
export default Login