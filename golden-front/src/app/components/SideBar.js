import Listado from "./Listado";

function SideBar() {
  return (
    <div>
       

        <div class="flex">
   
    <div class="w-1/4 h-screen bg-white p-4">
        <div class="divide-y divide-gray-200 space-y-5">
            <div>
                <h3 class="text-xl text-gray-800 mb-3 uppercase font-medium">Categorias</h3>
                <div class="space-y-2">
                  
       
            <div class="flex items-center">
                               <input type="checkbox" name="cat-1" id="cat-1"
                                   class="text-primary focus:ring-0 rounded-sm cursor-pointer"/>
                               <label for="cat-1" class="text-gray-600 ml-3 cursor-pointer">Anillos</label>
                               
                </div>
                
                </div>
            </div>
        </div>
    </div>
  
    <div class="w-3/4 p-4">
       <Listado ></Listado>
        
    </div>
</div>

    </div>
  );
}

export default SideBar;