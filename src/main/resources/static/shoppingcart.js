const cartitem = document.querySelector(".cartitem")
const checkout = document.querySelector(".cartcheckout")
const sum = document.getElementById("cartsum")

let cartData = [
    {productId: '00', productName: "first", productPrice: 199},
    {productId: '01', productName: "second", productPrice: 199},    
    {productId: '02', productName: "third", productPrice: 199},
    {productId: '03', productName: "fourth", productPrice: 199}
]

updateSum();
function saveToCart(id, name)
{
    let b = {productId: id, productName: name}
    cartData.push(b)

    updateSum()
}

function printOutCart()
{
    let htmltxt = ""
    for(let c of cartData)
    {
        const prodId = c.productId
        const prodName = c.productName

        htmltxt += `<div>Produkt: ${c.productName}</div>`
    }
    checkout.innerHTML = htmltxt

    updateSum()
}

function updateSum()
{
    let cartsum = cartData.length
    sum.innerText = cartData.length
}

function addProduct()
{
    let b = {productId: '00', productName: 'asd'}
    cartData.push(b)

    updateSum()
}