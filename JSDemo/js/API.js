//comsume to Products APIs
let fetchProduct = async ()=>{
    fetch('https://api.escuelajs.co/api/v1/products?limit=12&offset=0')
    .then(response => response.json())
    .then(resp=>showToUI(resp))
}
fetchProduct()
let card =''
let showToUI =(product) => {
    product.map(pro=>{
        card+=
        ` 
            <div class="bg-white rounded-lg">
                <a href="#">
                    <img class="p-0 rounded-t-lg" src=${pro.images[1]} alt="product image" />
                </a>
                <div class="px-5 py-4 text-base">
                    <p class="text-xs">ID: ${pro.id}</p>
                    <p class="text-xs">Title: ${pro.title}</p>
                    <p class="text-xs">Price: ${pro.price}$</p>
                    <p class="text-xs line-clamp-2">Description: ${pro.description}</p>
                </div>
            </div>
        `
    })
    document.querySelector('.product').innerHTML=card
}
