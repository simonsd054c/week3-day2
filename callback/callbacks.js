// Callback - the functions passed as argument
// These are called back by the higher order function
// thus, the name - callback

//Error first Pattern


function add(err, a, b) {
    if(err) {
        console.log(err.message)
        return
    }
    console.log("Add")
    console.log(a + b)
}

function subtract(err, a, b) {
    if(err) {
        console.log(err.message)
        return
    }
    console.log("Subtract")
    console.log(a - b)
}

function calculate(a, b, cb) {
    if(typeof a !== "number" || typeof b !== "number") {
        const err = new Error("Inputs must be number")
        cb(err)
    } else {
        cb(null, a, b)
    }
}

calculate(4, "2", add)
// calculate(4, 2, subtract)