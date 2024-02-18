const ticketsButton = document.querySelectorAll(".allBtn")

for (let index = 0; index < ticketsButton.length; index++) {
    const singleButton = ticketsButton[index];

    singleButton.addEventListener("click", function () {
        const inner = singleButton.querySelector("#bottonText");
        console.log(inner); 
    })
    
}