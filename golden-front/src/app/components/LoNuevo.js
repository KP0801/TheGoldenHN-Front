function LoNuevo(){

        return (

            <div class="container pb-16">
    <h2 class="text-2xl font-medium text-gray-800 uppercase mb-6">
        Lo Mas Nuevo
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
       
            <div class="bg-white shadow rounded overflow-hidden group">
                <div class="relative">
                    <img src="#" alt="product 1" class="w-full" />
                    <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                        {/* Ver producto */}
                        <a href="url" class="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition" title="view product">
                            <svg
                             xmlns="http://www.w3.org/2000/svg"
                             fill="none"
                             viewBox="0 0 24 24"
                             stroke-width="1.5"
                             stroke="currentColor"
                             class="size-6"
                         >
                             <path
                                 stroke-linecap="round"
                                 stroke-linejoin="round"
                                 d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                             ></path>
                         </svg>
                        </a>
                        {/* Ver producto */}
                    </div>
                </div>
                <div class="pt-4 pb-3 px-4">
                    <a href="#">
                        <h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                            Nombre del Producto
                        </h4>
                    </a>
                    <div class="flex items-baseline mb-1 space-x-2">
                        <p class="text-sm text-gray-400 ">
                            Precio 60
                        </p>
                    </div>
                </div>
                <a href="#" class="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">
                    añadir al Carrito
                </a>
            </div>
   
    </div>
</div>


        );

}

export default LoNuevo;