const emojis = [
    "🦝",
    "🦝",
    "🦊",
    "🦊",
    "🐼",
    "🐼",
    "🐵",
    "🐵",
    "🐔",
    "🐔",
    "🐷",
    "🐷",
    "🐶",
    "🐶",
    "🐸",
    "🐸"
];
let openCards = [];

/* Criar um embaralhador de emojis */
let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

/* Fazer um for para desenhar os elementos na tela */
for (let i = 0; i < emojis.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffleEmojis[i];
    box.onclick = handleClick;
    /* Agora pendurar esse elemento na div game */
    document.querySelector(".game").appendChild(box);
}

function handleClick() {
/* Tem um bug aqui! se eu clicar 2x na mesma carta ela deixa a carta aberta mesmo sem ter uma igual
Exemplo cliquei na raposa (esse clique cria openCards[0]) e depois cliquei na raposa novamente (esse clique cria openCards[1])
ficando a carta aberta! Não sei como resolver isso agora!*/
if (openCards.length < 2) {
        this.classList.add("boxOpen");
        openCards.push(this);
    }
    if (openCards.length == 2) {
        setTimeout(checkMatch, 500);
    }
/*     console.log(openCards); */
}

function checkMatch() {
    if (openCards[0].innerHTML === openCards[1].innerHTML) {
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
    } else {
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
    }

    openCards = [];
    if (document.querySelectorAll(".boxMatch").length === emojis.length) {
        alert("Você venceu !");
    }
}