const genereteNumber = () => {
    // Player 1 Section
    let valueP1 = Math.ceil(Math.random() * 6);
    const player1ImgElement = document.querySelector(".img1");
    player1ImgElement.setAttribute("src", `images/dice${valueP1}.png`);

    // Player 2 Section
    let valueP2 = Math.ceil(Math.random() * 6);
    const player2ImgElement = document.querySelector(".img2");
    player2ImgElement.setAttribute("src", `images/dice${valueP2}.png`);

    // Winner text Section
    const h1Element = document.querySelector("h1");
    let message;

    if (valueP1 > valueP2) {
        message = "Player 1 Wins";
        player1ImgElement.classList.add("img-winner");
        player2ImgElement.classList.remove("img-winner");  
    } else if (valueP1 < valueP2) {
        message = "Player 2 Wins";
        player1ImgElement.classList.remove("img-winner");
        player2ImgElement.classList.add("img-winner");
    } else {
        message = "Draw";
        player1ImgElement.classList.add("img-winner"); 
        player2ImgElement.classList.add("img-winner"); 
    }

    h1Element.innerText = message;
}

let buttonElement = document.querySelector("button");

buttonElement.addEventListener("click", genereteNumber);