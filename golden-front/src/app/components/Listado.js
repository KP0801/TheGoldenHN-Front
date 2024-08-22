import Links from "./Links";

function Listado() {
    return (
        <>
       
        <div class="text-center md:hidden bg-slate-100">
            <button
                class="text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 block md:hidden"
                type="button"
                data-drawer-target="drawer-example"
                data-drawer-show="drawer-example"
                aria-controls="drawer-example"
            >
                <ion-icon name="grid-outline"></ion-icon>
            </button>
        </div>
        <div class="col-span-3">
            <div class="flex items-center mb-4"></div>

            <div class="grid md:grid-cols-3 grid-cols-2 gap-6">
                
                    
                        <div class="bg-white shadow rounded overflow-hidden group">
                            <div class="relative">
                                <img
                                    src="img"
                                    alt="product 1"
                                    class="w-full"
                                />
                                <div
                                    class="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                    justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
                                >
                                    <a
                                        href="url"
                                        class="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                                        title="view product"
                                    >
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
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div class="pt-4 pb-3 px-4">
                                <a href="#">
                                    <h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                                        Nombre
                                    </h4>
                                </a>
                                <div class="flex items-baseline mb-1 space-x-2">
                                   
                                    <p class="text-sm text-gray-400 line-through">
                                        Precio
                                    </p>
                                </div>
                                <div class="flex items-center" />
                            </div>
                            <a
                                href="#"
                                class="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
                            >
                                Añadir al Carro
                            </a>
                        </div>
                    
                
            </div>
        </div>

          
        <Links />
        </>
        

    );
}

export default Listado;