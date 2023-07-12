const productFlex=document.querySelector('.product-flex')
const firstProductDiv=document.querySelector('.first-product-div')
const secondProductDiv=document.querySelector('.second-product-div')
const thirdProductDiv=document.querySelector('.third-product-div')
const fourthProductDiv=document.querySelector('.fourth-product-div')
const productCards = document.querySelectorAll("#product-card")



//Looping and  Creating the Elements
 
for(let productCard = 0; productCard < productCards.length; productCard++){
    console.log(productCards)
let inputDiv = document.createElement("div")
inputDiv.className = "input-div"

let pinputDiv = document.createElement("p")
pinputDiv.appendChild(document.createTextNode("$"))

let totalPriceInput = document.createElement("input")
totalPriceInput.className = "total-price"
totalPriceInput.type = "number"
totalPriceInput.value = 40;
totalPriceInput.readOnly = true;

// Appending the 2 elements to it's parent element

inputDiv.appendChild(pinputDiv)
inputDiv.appendChild(totalPriceInput)


// Creating the Elements

let cartDiv = document.createElement("div")
cartDiv.className= "cart-div"
let addButton = document.createElement("button")
addButton.className= "add-button"
addButton.appendChild(document.createTextNode("+"))
let minusButton = document.createElement("button")
minusButton.className= "add-button"
minusButton.appendChild(document.createTextNode("-"))
let numberInput = document.createElement("input")
numberInput.className = "number"
numberInput.type = "number"
numberInput.value = 1;
numberInput.readOnly = true;
let addCart = document.createElement("button")
addCart.className = "add-cart"
addCart.appendChild(document.createTextNode("ADD TO CART"))

// Appending the 2 elements to it's parent element

cartDiv.appendChild(addButton)
cartDiv.appendChild(numberInput)
cartDiv.appendChild(minusButton)
cartDiv.appendChild(addCart)

// Appending the parent elements to the node elements
productCards[productCard].appendChild(inputDiv)
productCards[productCard].appendChild(cartDiv)


addButton.addEventListener("click", e =>{
   console.log(productCards[productCard])
   numberInput.value++
   let additionalPrice = 40;
  let calculatedPrice = Number(totalPriceInput.value) + additionalPrice
  totalPriceInput.value = calculatedPrice

})

minusButton.addEventListener("click", e =>{
    let subtractingPrice = 40;
    if(numberInput.value < 1){
        numberInput.value = 1
        totalPriceInput.value = 40
    }else if(numberInput.value > 1){
        numberInput.value--
       let minusCalculatedPrice = Number(totalPriceInput.value)  - subtractingPrice
       totalPriceInput.value = minusCalculatedPrice
    }
 })
}




// this is the selection section
productFlex.addEventListener('click',e=>{
    for(let products=0; products < productFlex.children.length; products++){
        let div = productFlex.children[products]
        if(div === e.target){
            div.classList.add('active')
            console.log(div.innerHTML)
            console.log(e.target.textContent)
        }else if (e.target.textContent === "Organic Body Oil"){
            secondProductDiv.classList.remove("hidden")
            firstProductDiv.classList.add('hidden')
            thirdProductDiv.classList.add('hidden')
            fourthProductDiv.classList.add('hidden')
            div.classList.remove('active')
        
        }else if(e.target.textContent === "Organic Accesories"){
            thirdProductDiv.classList.remove('hidden')
            secondProductDiv.classList.add("hidden")
            fourthProductDiv.classList.add('hidden')
            firstProductDiv.classList.add('hidden')
            div.classList.remove('active')
        }else if(e.target.textContent === "Natural Flowers"){
            fourthProductDiv.classList.remove('hidden')
            thirdProductDiv.classList.add('hidden')
            secondProductDiv.classList.add("hidden")
            firstProductDiv.classList.add('hidden')
            div.classList.remove('active')
        }else if(e.target.textContent === "Organic Shampoo"){
            firstProductDiv.classList.remove("hidden")
            fourthProductDiv.classList.add('hidden')
            thirdProductDiv.classList.add('hidden')
            secondProductDiv.classList.add("hidden")
            div.classList.remove('active')
        }else{
            div.classList.remove('active')
        }
        }  
})