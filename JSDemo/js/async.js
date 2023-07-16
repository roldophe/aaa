/* 
let fetchProducts = async () => {
    fetch('https://api.escuelajs.co/api/v1/products')
        .then(response => response.json())
        //.then(resp => console.log('Product ', resp))
        .then(resp => showToUI(resp))
}
let fetchCategory = async () => {
    fetch('https://api.escuelajs.co/api/v1/categories')
        .then(response => response.json())
         .then(resp => console.log('Category ', resp)) 
        .then(resp => showToUI(resp))
}
let fetchusers = async () => {
    fetch('https://api.escuelajs.co/api/v1/users')
        .then(response => response.json())
         .then(resp => console.log('User ', resp)) 
        .then(resp => showToUI(resp))
}
fetchProducts()
fetchCategory()
fetchusers() */

let card = ''
let showToUI = (product) => {
    product.map(pro => {
        card += `
            <div class="bg-white rounded-lg">
                <a href="#">
                    <img class="p-0 rounded-t-lg" src=${pro.images[1]} alt="product image" />
                </a>
                <div class="px-5 py-4 text-base">
                    <p class="text-xs">ID: ${pro.id}</p>
                    <p class="text-xs">Title: ${pro.title}</p>
                    <p class="text-xs">Price: ${pro.price}$</p>
                    <p class="text-xs line-clamp-1">Description: ${pro.description}</p>
                </div>
            </div>
    `
    })
    //document.querySelector('.prod').innerHTML = card
}

//create function to insert product to APIs
async function fetchProduct() {
    
        //JavaScript Object
        let product = {
            "title": "Roldophe",
            "price": 10,
            "description": "A description",
            "categoryId": 5,
            "images": [
                "https://placeimg.com/640/480/any"
            ]
        }
    //body to post
    fetch('https://api.escuelajs.co/api/v1/products',
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(res => console.log(res))
}
//product()
document.querySelector('#postProduct').addEventListener('click',function(){
    console.log("btn click")
    fetchProduct();
}
  
)
    

