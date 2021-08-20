
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

function convertClickToLetter(){
    alert('This method is working!');
}

let missingWord = convertWord();
let gaps = gameStart(missingWord);

const mainDiv = document.getElementById('word');
mainDiv.innerHTML = gaps;

document.getElementById('word').addEventListener('click', ()=>{
    const childWindow = window.open('./inputLetter.html', )
})
