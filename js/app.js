let hum = document.querySelector("#icon")
let menu = document.querySelector("ul")
hum.addEventListener("click", function() {
    if (hum.classList.contains("icon")) {
        hum.classList.remove("icon");
        hum.classList.add("icon-close")
        menu.style.display = "block";
    } else {
        hum.classList.remove("icon-close");
        hum.classList.add("icon")
        menu.style.display = "none";
    }
})
