function RegisterForm(){

    return(
        <div class="contain py-16 bg-slate-100">
        <div class="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
            <h2 class="text-2xl uppercase font-medium mb-1">Crear tu cuenta</h2>
            <p class="text-gray-600 mb-6 text-sm">
                Registro a nuevos clientes
            </p>
            <form action="#" method="post" autocomplete="off">
                <div class="space-y-2">
                    <div>
                        <label for="name" class="text-gray-600 mb-2 block">Nombre Completo</label>
                        <input type="text" name="name" id="name"
                            class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                            placeholder="fulan fulana"/>
                    </div>
                    <div>
                        <label for="email" class="text-gray-600 mb-2 block">Correo Electronico</label>
                        <input type="email" name="email" id="email"
                            class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                            placeholder="youremail.@domain.com" />
                    </div>
                    <div>
                        <label for="password" class="text-gray-600 mb-2 block">Contraseña</label>
                        <input type="password" name="password" id="password"
                            class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                            placeholder="*******"/>
                    </div>
                    <div>
                        <label for="confirm" class="text-gray-600 mb-2 block">Confirmar Contraseña</label>
                        <input type="password" name="confirm" id="confirm"
                            class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                            placeholder="*******"/>
                    </div>
                </div>
                
                <div class="mt-4">
                    <button type="submit"
                        class="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium">Crea tu cuenta</button>
                </div>
            </form>
    
        
            <div class="mt-6 flex justify-center relative">
                <div class="text-gray-600 uppercase px-3 bg-white z-10 relative">Registrate con </div>
                <div class="absolute left-0 top-3 w-full border-b-2 border-gray-200"></div>
            </div>
            <div class="mt-4 flex gap-4">
                <a href="#"
                    class="w-1/2 py-2 text-center text-white bg-red-600 rounded uppercase font-roboto font-medium text-sm hover:bg-red-500">google</a>
            </div>
           
    
            <p class="mt-4 text-center text-gray-600">Ya tienes cuenta?<a href="/login"
                    class="text-primary">Inicia sesion </a></p>
        </div>
    </div>
    )
}

export default RegisterForm;