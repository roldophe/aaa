//create array
//1. create using constructir
let primNummber = new Array(1,3,5,7,11,17)
//2. create using literal notation
let OddNumber =[1,3,5,7,9]
// document.write(`<h1>${primNummber[primNummber.length-1]}</h1>`)
// document.write(`<h1>${primNummber[2]}</h1>`)

let product=[
    {
        id:1,
        title:"Apples",
        price:20,
        image:"https://usapple.org/wp-content/uploads/2019/10/apple-pink-lady.png"
    },{
        id:2,
        title:"Apples",
        price:13,
        image:"https://usapple.org/wp-content/uploads/2019/10/apple-pink-lady.png"
    },{
        id:3,
        title:"Apples",
        price:9,
        image:"https://usapple.org/wp-content/uploads/2019/10/apple-pink-lady.png"
    },{
        id:4,
        title:"Apples",
        price:27,
        image:"https://usapple.org/wp-content/uploads/2019/10/apple-pink-lady.png"
    }
]
let copyProduct=product
let mergeProduct = product.concat(copyProduct)
let card=''
mergeProduct.map(function(pro){
    console.log(pro)
        card+=`
            <div class="col-12 col-md-3 mt-3">
                <div class="card">
                    <img src=${pro.image} class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${pro.title}</h5>
                            <p class="card-text">Price: ${pro.price}$</p>
                        </div>
                </div>
            </div>
        `
    }
)
document.querySelector('.row').innerHTML=card