let cart = []

function randomId(max) {
    return Math.floor(Math.random() * max);
}
  

function addToCart(){

    let obj = {}

    cart.push(obj)

    obj.nam = prompt('Введите название')
    obj.price = +prompt('Введите цену')
    obj.amount = +prompt('Введите количество')
    obj.category = prompt('Введите категорию')
    obj.sum = obj.price * obj.amount
    obj.id = randomId(9999)

}

addToCart()

console.log(cart) 