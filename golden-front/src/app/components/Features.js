function Features(){

    return (
        <div class="container py-16">
        <div class="w-10/12 grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto justify-center">
            <div class="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
                <img src="/images/delivery-van.svg" alt="Delivery" class="w-12 h-12 object-contain"/>
                <div>
                    <h4 class="font-medium capitalize text-lg">Free Shipping</h4>
                    <p class="text-gray-500 text-sm">Orden mas de L.500</p>
                </div>
            </div>
            <div class="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
                <img src="/images/money-back.svg" alt="Delivery" class="w-12 h-12 object-contain"/>
                <div>
                 <h4 class="font-medium capitalize text-lg">Devolucion</h4>
                    <p class="text-gray-500 text-sm">30 days o menos</p>
                </div>
            </div>
            <div class="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
                <img src="/images/money-back.svg" alt="Delivery" class="w-12 h-12 object-contain"/>
                <div>
                    <h4 class="font-medium capitalize text-lg">Garantia</h4>
                    <p class="text-gray-500 text-sm">Garantizada</p>
                </div>
            </div>
        </div>
    </div>
    );

}

export default Features;