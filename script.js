const btn = document.getElementById("btn")
let theme = "white"

btn.addEventListener("click", function() {
    if (theme == "black") {
        btn.style.backgroundColor = "black"
        btn.style.color = "white"
        document.body.style.backgroundColor = "white"
        theme = "white"
    } else {
        btn.style.backgroundColor = "white"
        btn.style.color = "black"
        document.body.style.backgroundColor = "black"
        theme = "black"
    }
})