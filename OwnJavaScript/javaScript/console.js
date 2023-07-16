/* Shortcut block comment : Shift+ Alt + A */
/* Using concole log */
var foo = "bar"
console.log(foo)

/* If you want to log two or more values */
var thisVar = 'frist value'
var thatVar = 'second value'
console.log("this var: ", thisVar, "that var: ", thatVar)

/*
    Placeholders
    You can use console.log() in combination with placeholder
*/
var greet ='Hello',who =' World!';
console.log("%s, %s",greet,who)
var message=greet+who
document.querySelector('#demo').innerHTML=message

/* Object console */ 
console.log({
    'Email':'',
    'Groups':{},
    'ID':33,
    'IsHiddenInUI':false,
    'IsSiteAdmin':false,
    'LonginName':'i:0#.w|virtualdemain\\user2',
    'PrincipalType':1,
    'Title':'user2'
})
/* Logging HTML elements */
/* You have the ability to log any element which exist within the dom. */
/* In this case we log the body of element:  */
console.log(document.body)

/* Using DOM */
let dom='Dom stands for Document Object Model.'
console.log(dom)
document.querySelector('#paragraph').innerHTML=dom
/* You can also use JS create new HTML element programmatically */
var element = document.createElement('h2');
element.textContent='DOM';
document.body.appendChild(element)