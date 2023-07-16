//define function
function welcomeMessage(){
    document.querySelector('#demo').innerHTML="Welcome to ISTAD"
}
//called function
welcomeMessage()
//function with function
function greeting (name){
    document.querySelector('#demo').innerHTML=`Welcome, ${name}`
}
//let fullname = prompt("Enter fullname");
//greeting(fullname)
greeting("Slam Sor")
//default value parameter
function sum(num1=1_000_000,num2=10.5){
    return num1 + num2
}
let result = sum(2e3,5e3)
document.querySelector('#demo').innerHTML =`Rsult: ${result}`
let animal=[
    {
        title: "cat"
    },
    {
        title: "dog"
    },
    {
        title: "cow"
    }
]
animal.map(ani=>{
    console.log(ani)
})