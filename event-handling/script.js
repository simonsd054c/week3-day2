
const btn = document.querySelector("button")

function randomNumber() {
    return Math.round(Math.random() * 255)
}

function changeBackground() {
    document.body.style.backgroundColor = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`
    btn.removeEventListener("click", changeBackground)
}

btn.addEventListener("click", changeBackground)

btn.addEventListener("click", () => {
    console.log("Button Clicked!!")
})