const cart_container = document.querySelector(".cart_container")
const cart1 = document.querySelector(".cart1")
const cart2 = document.querySelector(".cart2")
const cart3 = document.querySelector(".cart3")
const clickMe = document.querySelector("#click_me")

const colors = ["red", "blue", "green", "crimson", "royalblue", "orange", "lightgreen", "purple", "black", "darkgray", "pink", "plum", "dodgerblue", "darkturquoise", "darkcyan", "darkslateblue", "darkorange", "coral", "brown", "cornsilk", "skyblue", "tomato", "chartreuse"]

function makeCartColors() {
    const div1 = document.createElement("div")
    const div2 = document.createElement("div")
    const div3 = document.createElement("div")
    div1.classList.add("carts");
    div2.classList.add("carts");
    div3.classList.add("carts");
    div1.style.backgroundColor = colors[parseInt(Math.random() * 23)];
    div2.style.backgroundColor = colors[parseInt(Math.random() * 23)];
    div3.style.backgroundColor = colors[parseInt(Math.random() * 23)];
    cart_container.append(div1)
    cart_container.append(div2)
    cart_container.append(div3)
}
clickMe.addEventListener("click", () => {
    makeCartColors()
})
cart_container.addEventListener("scroll", () => {
    makeCartColors()
})