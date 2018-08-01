//Const vars that hold important settings
const cardImgUrl = "https://deckofcardsapi.com/static/img/"; //code.png here

//stored deck id and deck
var cards;
var worked = false;
var deckPile = []; //24 items
var extraPile = [];

var activeCard = null;

var dePileI = 0;

window.onload = function () {
    $('#start').on('click', () => {
        //Must be synchronized
        //draw the whole deck
        createDeckAndDraw();

        //Changing the view of the webpage
        if (worked) {
            $('#hRoom').attr('hidden', true);
            $('#start').attr('hidden', true);
            $('#game').attr('hidden', false);
            $('#start').off;
        }

        //set up all deck software wise
        let count = 1;

        //set up pile0
        p0 = document.getElementById(`pile1`);
        p0.children[0].addEventListener('click', imgClicker, false);
        p0.children[0].setAttribute('src', cards[0].image);
        p0.children[0].setAttribute('alt', cards[0].code);

        for (let i = 0; i < 6; i++) {
            //temporary array for extraPile[i]
            let tempDeck = [];
            //get pile
            let pile = document.getElementById(`pile${i + 2}`);
            for (let j = 0; j <= i; j++) {
                //insert code to add back images
                if (j == 0) {
                    //set back image
                    let childe = pile.children[0];
                    childe.setAttribute('src', 'backCard.png');
                    childe.addEventListener('click', imgClicker, false);
                }
                else {
                    //add img with backCard, append to pile
                    let di = document.createElement('div');
                    let im = document.createElement('img');
                    im.setAttribute('src', 'backCard.png');
                    im.addEventListener('click', imgClicker, false);
                    di.appendChild(im);
                    di.style = "position: relative; top: -100px;";
                    pile.appendChild(di);
                    pile = di;
                }
                //append value
                tempDeck[j] = count++;
            }

            //add the temp deck
            extraPile[i] = tempDeck;

            //add the top card of the pile
            let topCount = count++;
            let di = document.createElement('div');
            let im = document.createElement('img');
            im.setAttribute('src', cards[topCount].image);
            im.setAttribute('alt', cards[topCount].code);
            im.addEventListener('click', imgClicker, false);
            di.appendChild(im);
            di.style = "position: relative; top: -100px;";
            pile.appendChild(di);
            pile = di;

        }

        for (let i = 0; i < 24; i++) {
            deckPile[i] = count++;
        }
        console.log(count);
    });


    //deck pile logic
    $('#dePile > img').on('click', deClick);

    //pPile select action
    $('#pPile > img').on('click', imgClicker);

    //the suits
    $('#CPile > img').on('click', imgClicker);
    $('#SPile > img').on('click', imgClicker);
    $('#HPile > img').on('click', imgClicker);
    $('#DPile > img').on('click', imgClicker);

}



/*
    callback functions
*/

function deClick() {
    //Undo the active card click
    undoTarget();
    //
    if (deckPile.length == 0) {
        //do nothing
    }
    else {
        let dePileSrc = 'backCard.png'; //default back
        let pPileSrc;
        let pPileAlt = ""; //a meaningless alt statement
        if (dePileI == deckPile.length) {
            pPileSrc = 'empty.png';
            dePileI = 0;
        }
        else {
            if (dePileI == deckPile.length - 1) {
                dePileSrc = 'empty.png';
            }
            //Get next element in the array
            let card = cards[deckPile[dePileI++]];
            pPileSrc = card.image;
            pPileAlt = card.code;
        }

        $('#dePile > img').attr('src', dePileSrc);
        $('#pPile > img').attr('src', pPileSrc);
        $('#pPile > img').attr('alt', pPileAlt);
    }
}


function imgClicker(event) {
    //get target values

    let img = event.target;
    let code2 = img.getAttribute("alt");
    let pImg = img.parentElement;
    let pId = pImg.getAttribute('id');
    //should only run if given a valid target
    if (typeof (code2) != 'undefined' && code2 != null) {
        if (activeCard == null) {
            //set first card as active if not blank

            if (code2 != "") {
                activeCard = img;
                img.setAttribute("class", "bright");
            }
            return true;
        }

        let pCard = activeCard.parentElement;
        let pCId = pCard.getAttribute('id');
        let code1 = activeCard.getAttribute('alt');

        if (fitCodeSuit(code1, code2)) {
            //A type of movement will happen if we move from * to pile
            //check if img is part of pile1....pile7
            if ($('div[id^="pile"]').find(img).length == 1) {
                //destination received, must check where source comes from
                if ($('div[id^="pile"]').find(activeCard).length == 1) {
                    //activeCard is in pile1...pile7
                    //pile to pile movement
                    if (code2 == "") {
                        pImg.removeChild(img); // remove blank image
                        //move children
                        if(pCard.children.length == 2)
                            pImg.appendChild(pCard.children[0]);
                        pImg.appendChild(pCard.children[0]);

                        //Check if pCard is the top of pile
                        if (pCId != null && typeof (pCId) != 'undefined' && pCId.substr(0, 4) == "pile") {
                            //create a blank image
                            let nImg = document.createElement('img');
                            nImg.setAttribute('src', 'empty.png');
                            nImg.setAttribute('alt', "");
                            nImg.addEventListener('click', imgClicker);
                            pCard.appendChild(nImg);
                        }
                        else {
                            //delete div
                            let ppCard = pCard.parentElement;
                            ppCard.removeChild(pCard);

                            let ppImg = ppCard.children[0];
                            let ppAlt = ppImg.getAttribute('alt');
                            if (typeof (ppAlt) == 'undefined' || ppAlt == null) {
                                //we gotta flip the card
                                let i = identifyParent(ppImg);
                                let extra = extraPile[i - 2];
                                let imgIndex = extra.shift();
                                let card = cards[imgIndex];
                                ppImg.setAttribute('src', card.image);
                                ppImg.setAttribute('alt', card.code);
                            }
                        }
                    }
                    else {
                        //destination pile is not empty
                        if (pCId != null && typeof (pCId) != 'undefined' && pCId.substr(0, 4) == "pile") {
                            //source is at top of pile
                            //create a new div with the children
                            let ndiv = document.createElement('div');
                            if(pCard.children.length == 2)
                                ndiv.appendChild(pCard.children[0]);
                            ndiv.appendChild(pCard.children[0]);
                            //move pile
                            pImg.appendChild(ndiv);
                            ndiv.style = "position: relative; top: -100px;";

                            //create img
                            let nImg = document.createElement('img');
                            nImg.setAttribute('src', "empty.png");
                            nImg.setAttribute('alt', "");
                            nImg.addEventListener('click', imgClicker);
                            pCard.appendChild(nImg);

                        }
                        else {
                            //flip the card above if applyable
                            let ppCard = pCard.parentElement;
                            let ppImg = ppCard.children[0];
                            let ppAlt = ppImg.getAttribute('alt');
                            if (typeof (ppAlt) == 'undefined' || ppAlt == null) {
                                //we gotta flip the card
                                let i = identifyParent(ppImg);
                                let extra = extraPile[i - 2];
                                let imgIndex = extra.shift();
                                let card = cards[imgIndex];
                                ppImg.setAttribute('src', card.image);
                                ppImg.setAttribute('alt', card.code);
                            }
                            //append div div
                            pImg.appendChild(pCard);
                        }
                    }

                }
                else {
                    //source is from pPile or the suits
                    //action MOVE
                    if (code2 == "") {
                        img.setAttribute('src', activeCard.getAttribute('src')); //copy over image
                        img.setAttribute('alt', code1); //copy code
                    }
                    else {
                        //insert new div with new image
                        let ndiv = document.createElement('div');
                        let nImg = document.createElement('img');
                        nImg.setAttribute('src', activeCard.getAttribute('src'));
                        nImg.setAttribute('alt', code1);
                        nImg.addEventListener('click', imgClicker)
                        ndiv.appendChild(nImg);
                        pImg.appendChild(ndiv);
                        ndiv.style = "position: relative; top: -100px;";
                    }

                    //now deal with deleting value
                    if (pCId == "pPile") {
                        deckPile.splice(--dePileI, 1);//current I is I-1
                        if (dePileI == 0) {
                            activeCard.setAttribute('src', 'empty.png');
                            activeCard.setAttribute('alt', "");
                        }
                        else {

                            //get the latest element
                            dePileI--; //get current I-1
                            deClick(); //display current deck configuration
                        }
                    }
                    else {
                        //its one of the suits
                        //decrease number code by one
                        let suit = code1[1];
                        switch (code1[0]) {
                            case "A":
                                activeCard.setAttribute('src', "empty.png");
                                activeCard.setAttribute('alt', "");
                                break;
                            case "K":
                                activeCard.setAttribute('src', `${cardImgUrl}Q${suit}`);
                                activeCard.setAttribute('alt', 'Q' + suit);
                                break;
                            case "Q":
                                activeCard.setAttribute('src', `${cardImgUrl}J${suit}`);
                                activeCard.setAttribute('alt', 'J' + suit);
                                break;
                            case "J":
                                activeCard.setAttribute('src', `${cardImgUrl}0${suit}`);
                                activeCard.setAttribute('alt', '0' + suit);
                                break;
                            case "0":
                                activeCard.setAttribute('src', `${cardImgUrl}9${suit}`);
                                activeCard.setAttribute('alt', '9' + suit);
                                break;
                            default:
                                let num = parseInt(code1[0]) - 1;
                                activeCard.setAttribute('src', `${cardImgUrl}${num}${suit}`);
                                activeCard.setAttribute('alt', num + suit);
                                break;

                        }
                    }
                }
            }
            undoTarget();
        }
        else if (fitCodeSameSuit(code1, code2)) {
            //This is when destination is one of the suit piles
            //source must be a solo card and destination cannot be pPile
            if (pCard.children.length == 1 && pId != "pPile" && pId.substr(1,4) == "Pile") {
                if ($('div[id^="pile"]').find(activeCard).length == 1) {
                    //source is from pile
                    //copy image and delete?
                    pImg.removeChild(img); // remove blank image
                    //move children
                    if(pCard.children.length == 2 )
                        pImg.appendChild(pCard.children[0]);
                    pImg.appendChild(pCard.children[0]);

                    //Check if pCard is the top of pile
                    if (typeof (pCId) != 'undefined' && pCId != null && pCId.substr(0, 4) == "pile") {
                        //create a blank image
                        let nImg = document.createElement('img');
                        nImg.setAttribute('src', 'empty.png');
                        nImg.setAttribute('alt', "");
                        nImg.addEventListener('click', imgClicker);
                        pCard.appendChild(nImg);
                    }
                    else {
                        //delete div
                        let ppCard = pCard.parentElement;
                        ppCard.removeChild(pCard);

                        let ppImg = ppCard.children[0];
                        let ppAlt = ppImg.getAttribute('alt');
                        if (typeof (ppAlt) == 'undefined' || ppAlt == null) {
                            //we gotta flip the card
                            let i = identifyParent(ppImg);
                            let extra = extraPile[i - 2];
                            let imgIndex = extra.shift();
                            let card = cards[imgIndex];
                            ppImg.setAttribute('src', card.image);
                            ppImg.setAttribute('alt', card.code);
                        }
                    }
                }
                else {
                    //destination suits
                    //source if from pPile or suits
                    img.setAttribute('src', activeCard.getAttribute('src')); //copy over image
                    img.setAttribute('alt', code1); //copy code

                    //now deal with deleting value
                    if (pCId == "pPile") {
                        deckPile.splice(--dePileI, 1);//current I is I-1
                        if (dePileI == 0) {
                            activeCard.setAttribute('src', 'empty.png');
                            activeCard.setAttribute('alt', "");
                        }
                        else {
                            //get the latest element
                            dePileI--; //get current I-1
                            deClick(); //display current deck configuration
                        }
                    }
                    else {
                        //its one of the suits
                        //decrease number code by one
                        let suit = code1[1];
                        switch (code1[0]) {
                            case "A":
                                activeCard.setAttribute('src', "empty.png");
                                activeCard.setAttribute('alt', "");
                                break;
                            case "K":
                                activeCard.setAttribute('src', `${cardImgUrl}Q${suit}`);
                                activeCard.setAttribute('alt', 'Q' + suit);
                                break;
                            case "Q":
                                activeCard.setAttribute('src', `${cardImgUrl}J${suit}`);
                                activeCard.setAttribute('alt', 'J' + suit);
                                break;
                            case "J":
                                activeCard.setAttribute('src', `${cardImgUrl}0${suit}`);
                                activeCard.setAttribute('alt', '0' + suit);
                                break;
                            case "0":
                                activeCard.setAttribute('src', `${cardImgUrl}9${suit}`);
                                activeCard.setAttribute('alt', '9' + suit);
                                break;
                            default:
                                let num = parseInt(code1[0]) - 1;
                                activeCard.setAttribute('src', `${cardImgUrl}${num}${suit}`);
                                activeCard.setAttribute('alt', num + suit);
                                break;

                        }
                    }
                }
            }
            undoTarget();
        }
        else{
            undoTarget();//invalid
        }

    }

    event.stopPropagation();
}


/*
    Helper functions
*/

function undoTarget() {
    //unhilight every card and set activeCard to null
    activeCard = null;
    $('img').attr("class", "");
}

function identifyParent(img) {
    for (let i = 1; i <= 7; i++) {
        if ($(`#pile${i}`).find(img).length == 1) {
            return i;
        }
    }
    return -1; //should never happen given the right input
}

function createDeckAndDraw() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        console.log(xhr.status);
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                //Created deck is available and should store important values
                let deck = JSON.parse(xhr.responseText);
                cards = deck.cards;
                worked = true;
            }
            else {
                alert("Failed to retrieve deck. Try again :)");
            }
        }
    }

    //begin the open/send commands
    let url = "https://deckofcardsapi.com/api/deck/new/draw/?count=52";
    xhr.open("GET", url, false);
    //send result
    xhr.send();
}

//Fit functions
//check if two cards fit
//"" - empty card
//ab - card value a with suit b

function fitColor(code1, code2) {
    //check if they have different colors
    if (code1.length == 2 && code2.length == 2) {
        co1 = code1[1];
        co2 = code2[1];
        //spade, club vs heart, diamond
        return (co1 == "S" && co2 == "H") ||
            (co1 == "S" && co2 == "D") ||
            (co1 == "C" && co2 == "H") ||
            (co1 == "C" && co2 == "D") ||
            (co1 == "D" && co2 == "C") ||
            (co1 == "D" && co2 == "S") ||
            (co1 == "H" && co2 == "C") ||
            (co1 == "H" && co2 == "S");
    }
    if (code2 == "") { //no color is wild color
        return true;
    }
    return false;
}

function fitNum(code1, code2) {
    //King to blank
    if (code2 == "") {
        return code1[0] == "K" ? true : false
    }
    else if (code2.length == 2 && code1.length == 2) {
        let num1 = parseInt(code1[0]);
        let num2 = parseInt(code2[0]);
        if (num2 == 0) {
            return num1 == 9;
        }
        else if (3 <= num2 && num2 <= 9) {
            //num1 must be 2-8 to be valid
            return num2 == num1 + 1;
        }
        else {
            //AKQJ edge cases
            return (code1[0] == "A" && code2[0] == "2") ||
                (code1[0] == "Q" && code2[0] == "K") ||
                (code1[0] == "J" && code2[0] == "Q") ||
                (code1[0] == "0" && code2[0] == "J");
        }
    }

    return false;

}

function fitCodeSameSuit(code1, code2) {
    if (code2 == "") {
        return code1 != "" && code1[0] == "A";
    }
    if (code1.length == 2 && code2.length == 2) {
        let aBool = fitNum(code2, code1); //it number fit
        return aBool && code1[1] == code2[1];
    }
    return false;
}

function fitCodeSuit(code1, code2) {
    //alternating fit
    if (!fitColor(code1, code2)) {
        return false;
    }

    return fitNum(code1, code2);
}

