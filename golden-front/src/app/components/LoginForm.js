function LoginForm(){
    return (
       <div class="bg-slate-100">
         <div class="contain py-16 ">
        <div class="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
            <h2 class="text-2xl uppercase font-medium mb-1">Inicia Sesion </h2>
            <p class="text-gray-600 mb-6 text-sm">
               
            </p>
            <form action="#" method="post" autocomplete="off">
                <div class="space-y-2">
                    <div>
                        <label for="email" class="text-gray-600 mb-2 block ">Correo Electronico</label>
                        <input type="email" name="email" id="email "value={email} onChange={(e) => setEmail(e.target.value)}
                            class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                            placeholder="youremail.@domain.com"/>
                    </div>
                    <div>
                        <label for="password" class="text-gray-600 mb-2 block">Contraseña</label>
                        <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}
                            class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                            placeholder="*******"/>
                    </div>
                </div>
                <div class="flex items-center justify-between mt-6">
                    <div class="flex items-center">
                        <input type="checkbox" name="remember" id="remember"
                            class="text-primary focus:ring-0 rounded-sm cursor-pointer"/>
                        <label for="remember" class="text-gray-600 ml-3 cursor-pointer">Recuerdame</label>
                    </div>
                    <a href="#" class="text-primary">Olvido Contraseña</a>
                </div>
                <div class="mt-4"> 
                    <button type="submit" onClick={handleSubmit}
                        class="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium">Login</button>
                </div>
            </form>

            
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

export default LoginForm;