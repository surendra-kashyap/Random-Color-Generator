const getColor = () => {
    // Hex Color
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16) //toString(16) stands for Hex color.
    document.body.style.background = randomCode;
    document.getElementById("color-code").innerHTML = randomCode;

    navigator.clipboard.writeText(randomCode);
}
//event call
document.getElementById("btn").addEventListener(
    "click",
    getColor
)

//initial call
getColor()