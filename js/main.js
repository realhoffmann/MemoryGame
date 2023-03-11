
document.addEventListener("DOMContentLoaded", () => {
    var attempts = 0;
    var versuche = document.getElementById("versuche");
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
    var timer = document.getElementById("timer");
    var seconds = 0;

    function startTimer() {
        if (cardsWon.length != 8) {
            seconds++;
            timer.innerHTML = seconds;
        }
    }

    var interval = setInterval(startTimer, 1000);


    const cardArray = [
        { name: 'card1', img: 'pics/card1.png' },
        { name: 'card1', img: 'pics/card16.png' },
        { name: 'card2', img: 'pics/card2.png' },
        { name: 'card2', img: 'pics/card15.png' },
        { name: 'card3', img: 'pics/card3.png' },
        { name: 'card3', img: 'pics/card14.png' },
        { name: 'card4', img: 'pics/card4.png' },
        { name: 'card4', img: 'pics/card13.png' },
        { name: 'card5', img: 'pics/card5.png' },
        { name: 'card5', img: 'pics/card12.png' },
        { name: 'card6', img: 'pics/card6.png' },
        { name: 'card6', img: 'pics/card11.png' },
        { name: 'card7', img: 'pics/card7.png' },
        { name: 'card7', img: 'pics/card10.png' },
        { name: 'card8', img: 'pics/card8.png' },
        { name: 'card8', img: 'pics/card9.png' }
    ]

    cardArray.sort(() => 0.5 - Math.random())
    const gameGrid = document.querySelector('.gameGrid')



    function createGrid() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'pics/memoryBg.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            gameGrid.appendChild(card)
        }
    }
    createGrid()

    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            cards[optionOneId].setAttribute('src', 'pics/memoryBgI.png')
            cards[optionTwoId].setAttribute('src', 'pics/memoryBgI.png')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'pics/memoryBg.png')
            cards[optionTwoId].setAttribute('src', 'pics/memoryBg.png')
        }
        cardsChosen = []
        cardsChosenId = []
        attempts++;
        versuche.innerHTML = attempts;
    }

    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }




});


