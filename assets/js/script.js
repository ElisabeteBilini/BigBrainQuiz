 // Collect username from index.html page -----------------------------------------------------------------

let btnInitial = document.querySelector('.initial-btn');
let collectName = document.querySelector('.user');

    btnInitial.addEventListener('click', () => {
    let collectName = document.querySelector('.userName').value; 
    localStorage.setItem('userName', collectName); 
    })

    if(collectName !== null) collectName.textContent = localStorage.getItem('userName');


//-----------------------------------------GAME STRUCTURE---------------------------------------------------

const containerAnswers = document.querySelector('.container-answers')



//questions and answers 
let questions= [
    {
        title: 'The Cold War was between the United States and what other world power?',
        answers: [
            {text: 'The Soviet Union', correct: true },
            {text: 'Japan', correct: false },
            {text: 'China', correct: false },
            {text: 'Canada', correct: false },
        ]
    },
    {
        title: 'What scandal forced US President Richard Nixon to resign in 1974?',
        answers: [
            {text: 'Iran-Contra Affair', correct: false },
            {text: 'Lewinsky Scandal', correct: false },
            {text: 'Watergate Scandal', correct: true },
            {text: 'Whitewater Scandal', correct: false },
        ]
    },
    {
        title: 'Who was the first woman prime minister of Britain?',
        answers: [
            {text: 'Florence Nightingale', correct: false },
            {text: 'Margaret Thatcher', correct: true },
            {text: 'Queen Elizabeth II', correct: false },
            {text: 'Jane Austen', correct: false },
        ]
    },
    {
        title: 'Along with Hiroshima, Japan, which Japanese city was hit by an atomic bomb in 1945?',
        answers: [
            {text: 'Tokyo', correct: false },
            {text: 'Osaka', correct: false },
            {text: 'Nagoya', correct: false },
            {text: 'Nagasaki', correct: true },
        ]
    },
    {
        title: 'Who assassinated Abraham Lincoln?',
        answers: [
            {text: 'Lee Harvey Oswald', correct: false },
            {text: 'James Earl Ray', correct: false },
            {text: 'John Wilkes Booth', correct: true },
            {text: 'Leon Czolgosz', correct: false },
        ]
    },
    {
        title: 'Adolf Hitler was the leader of which party?',
        answers: [
            {text: 'Communist Party', correct: false },
            {text: 'Fascist Republican Party', correct: false },
            {text: 'Republican Party', correct: false },
            {text: 'Nazi Party', correct: true },
        ]
    },
    {
        title: 'What charter was approved by King John of England in 1215?',
        answers: [
            {text: 'The Mayflower Compact', correct: false },
            {text: 'Stamp Act', correct: false },
            {text: 'The Quartering Act', correct: false },
            {text: 'Magna Carta', correct: true },
        ]
    },
    {
        title: 'Which continent was ravaged by the Black Death in the 1300s?',
        answers: [
            {text: 'Europe', correct: true },
            {text: 'North America', correct: false },
            {text: 'South America', correct: false },
            {text: 'Africa', correct: false },
        ]
    },
    {
        title: 'Who created the first successful printer?',
        answers: [
            {text: 'Nikola Tesla', correct: false },
            {text: 'Johannes Gutenberg', correct: true },
            {text: 'Henry Ford', correct: false },
            {text: 'Benjamin Franklin', correct: false },
        ]
    },
    {
        title: 'What was the name of the first computer?',
        answers: [
            {text: 'INIAC', correct: false },
            {text: 'CAINE', correct: false },
            {text: 'ENIAC', correct: true },
            {text: 'CNIEC', correct: false },
        ]
    }]


function startGame(){
  LoadQuestion()
}

function LoadQuestion(){
    while(containerAnswers.firstChild){
        containerAnswers.removeChild(containerAnswers.firstChild)
    }
}





startGame(LoadQuestion);