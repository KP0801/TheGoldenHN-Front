'use client';

import LoginForm from "../components/LoginForm";
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

import { LoginUser } from  '@/services/users';
import { LoginFormValidator } from '@/utils/utils';

import ErrorListNotification from '@/components/ErrorListNotification';








function Login() {

  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [warningMessage, setWarningMessage] = useState([]);

  //Limpiamos localStorage
  useEffect(() => {
      console.log('Cleaning localStorage');
      localStorage.removeItem('token');
  }, []);

  const handleSubmit = (e) => {
      e.preventDefault();
console.log('email', email);
      const warnings = LoginFormValidator(
          email,
          password
      );

      if (warnings.length === 0) {
          LoginUser({
              email: email,
              password: password
          }).then( (response) => {
              if (response.error) {
                  setWarningMessage([response.error]);
              } else {
                  localStorage.setItem('token', response.idToken);
                  router.push('/');
              }
          }).catch( (error) => {
              setWarningMessage(['Network response was not ok','User or password incorrect']);
          })
      }else{
          setWarningMessage(warnings);
      }
  }



  return (
    <div class="bg-slate-100">
      <div class="contain py-16 ">
     <div class="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
         <h2 class="text-2xl uppercase font-medium mb-1">Inicia Sesion </h2>
         <p class="text-gray-600 mb-6 text-sm">
            
         </p>
         <div className="flex min-h-screen  justify-center my-7 ">
            <div className="w-full max-w-md">
            { warningMessage.length > 0 && <ErrorListNotification errors={warningMessage} /> }
                <h1 className="text-3xl font-bold text-center">Login</h1>
                <form className="mt-6">
                    <div>
                        <label htmlFor="email" className="block text-xs font-semibold text-gray-600 uppercase">
                            E-mail
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={ (e) => setEmail( e.target.value ) }
                            name="email"
                            placeholder=""
                            autoComplete="email"
                            className="w-full p-2 mt-1 border border-gray-300 rounded-md" 
                            required 
                        />
                    </div>
                    <div className="mt-4">
                        <label htmlFor="password" className="block text-xs font-semibold text-gray-600 uppercase">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={ (e) => setPassword( e.target.value ) }
                            name="password"
                            placeholder=""
                            autoComplete="current-password"
                            className="w-full p-2 mt-1 border border-gray-300 rounded-md" 
                            required
                        />
                    </div>
                    <div className="mt-6">
                        <button onClick={handleSubmit} type="submit" className="w-full py-2 px-3 text-white bg-blue-600 rounded-md">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>

         
         <div class="mt-6 flex justify-center relative">
             <div class="text-gray-600 uppercase px-3 bg-white z-10 relative">Inicia sesion con </div>
             <div class="absolute left-0 top-3 w-full border-b-2 border-gray-200"></div>
         </div>
         <div class="mt-4 flex gap-4">
             
             <a href="#"
                 class="w-1/2 py-2 text-center text-white bg-red-600 rounded uppercase font-roboto font-medium text-sm hover:bg-red-500">google</a>
         </div>
         

         <p class="mt-4 text-center text-gray-600">No tienes cuenta? <a href="/registro"
                 class="text-primary">Register
                 now</a></p>
     </div>
 </div>
    </div>
 );
}

export default Login;