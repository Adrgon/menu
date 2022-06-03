let order = [];

document.addEventListener('DOMContentLoaded', function(){
    //updateCart();
    let lnkCancel = document.querySelector('#lnkCancel')
    lnkCancel.addEventListener('click', function(evt){
        evt.preventDefault()
        order = [];
        updateCart()
    })


    let meals = document.querySelectorAll('.meal')
    meals.forEach(meal => {
        meal.addEventListener('click', function(){
            //console.log(e.target.textContent)
            const pedido = {
                title: this.dataset.title,
                price: this.dataset.price,
            }
            //console.log(title)
            order.push(pedido)
            updateCart();
        })
    });
})


function updateCart(){
    let html = "";

    for(let meal of order){
        html += `
            <li>${meal.title} - ${meal.price}</li>
        `
    }
    let cart = document.querySelector("#cart ul")
    cart.innerHTML = html
}
