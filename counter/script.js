let count = 0;

let value = document.querySelector("#value")

let btns = document.querySelectorAll(".btn")

// let btns = document.getElementsByClassName("btn") - Array.from()

btns.forEach((btn) => {


    function changeValue(e) {
        if(btn.classList.contains("decrease")) {
            count--;
        } else if(btn.classList.contains("increase")) {
            count++;
        } else if(btn.classList.contains("reset")) {
            count = 0;
        } else {

        }

        value.textContent = count

        if (count > 0) {
            value.style.color = "green"
        } else if (count < 0) {
            value.style.color = "red"
        } else {
            value.style.color = "black"
        }

    }

    btn.addEventListener("click", (e) => {
        changeValue(e)
    })

})