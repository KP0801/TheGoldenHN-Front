function Navbar() {

    return(
<div>

        
          
<nav>
    <a href="/">
        <img src="/images/Logo.png" alt="Logo" class="h-8" />
        <div class="flex flex-col items-center">
            <span class="text-gold-500 text-xl font-bold">The Golden HN</span>
            <span class="text-gold-500 text-sm font-light">Joyeros</span>
        </div>
    </a>
    <div class="hidden md:flex space-x-8">
        <a href="#" class="text-md text-gray-800 hover:text-gray-900">Link</a>
    </div>
    <button id="menu-button" class="block md:hidden text-gray-800 hover:text-gray-900">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"/>
        </svg>
    </button>
   </nav>
    <div id="mobile-menu" class="hidden md:hidden">
    <a href="#" class="block px-4 py-2 text-md text-gray-800 hover:bg-gray-100">Link</a>
    </div>


</div>
    );

}

export default Navbar;