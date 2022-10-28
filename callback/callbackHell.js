// A popular JS term
// when does it happens
// when callbacks are used unnecessarily

// Example - Ecommerce
// 1. Select an item
// 2. Add to cart
// 3. payment
// 4. update order

function select(cb) {
    console.log("Item Selected");
    cb()
}

function addToCart(cb) {
    console.log("Item Added to cart")
    cb()
}

function payment(cb) {
    console.log("Payment done")
    cb()
}

function updateOrder() {
    console.log("Order updated")
}

function buyItem() {
    select(function() {
        addToCart(function() {
            payment(function() {
                updateOrder()
            })
        })
    })

    // select(addToCart(payment(updateOrder)))
}

buyItem()

//pyramid of doom

//Solution - promise