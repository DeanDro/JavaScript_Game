
const listWords = ['airplane', 'learning', 'watermelon', 'applecake', 'swordfish'];


function convertWord(){
    listSize = listWords.length;
    const randNum = Math.floor(Math.random() * listSize);

    return listWords[randNum];
}

function gameStart(guessWord){
    let gaps = [];
    for (let letter of guessWord){
        gaps.push(`<button id="${letter}" class="missingLetter"> _ </button>`);
    }
    
    return gaps.join('');
}

function convertClickToLetter(elId){
    alert(elId);
    let el = document.getElementById(elId);
    el.innerText = elId;
}

let missingWord = convertWord();
let gap = gameStart(missingWord);


let wordTarget = document.getElementById('word');

wordTarget.innerHTML = gap;

function addListenersToLetters(){
    for (let el of missingWord){
        currentElement = document.getElementById(el)
        currentElement.addEventListener('click', () =>{
            currentElement.innerText = el;
        })
    }
}

addListenersToLetters();