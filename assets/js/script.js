 // Collect username from index.html page -----------------------------------------------------------------

let btnInitial = document.querySelector('.initial-btn');
let collectName = document.querySelector('.user');

    btnInitial.addEventListener('click', () => {
    let collectName = document.querySelector('.userName').value; 
    localStorage.setItem('userName', collectName); 
    })

    if(collectName !== null) collectName.textContent = localStorage.getItem('userName');


//-----------------------------------------GAME STRUCTURE---------------------------------------------------
//-------------------------------------Codi Academy TV reference-------------------------------------------

//questions and answers 
let questions = [
    {
        title: 'The Cold War was between the United States and what other world power?',
        answers: ['The Soviet Union', 'Japan', 'China', 'Canada'],
        correct: 0
    },
    {
        title: 'What scandal forced US President Richard Nixon to resign in 1974?',
        answers: ['Iran-Contra Affair', 'Lewinsky Scandal', 'Watergate Scandal', 'Whitewater Scandal'],
        correct: 2
    },
    {
        title: 'Who was the first woman prime minister of Britain?',
        answers: ['Florence Nightingale', 'Margaret Thatcher', 'Queen Elizabeth II', 'Jane Austen'],
        correct: 1
    },
    {
        title: 'Along with Hiroshima, Japan, which Japanese city was hit by an atomic bomb in 1945?',
        answers: ['Tokyo', 'Osaka', 'Nagoya', 'Nagasaki'],
        correct: 3
    },
    {
        title: 'Who assassinated Abraham Lincoln?',
        answers: ['Lee Harvey Oswald', 'James Earl Ray', 'John Wilkes Booth', 'Leon Czolgosz'],
        correct: 2
    },
    {
        title: 'Adolf Hitler was the leader of which party?',
        answers: ['Communist Party', 'Fascist Republican Party', 'Republican Party', 'Nazi Party'],
        correct: 3
    },
    {
        title: 'What charter was approved by King John of England in 1215?',
        answers: ['The Mayflower Compact', 'Stamp Act', 'The Quartering Act', 'Magna Carta'],
        correct: 3
    },
    {
        title: 'Which continent was ravaged by the Black Death in the 1300s?',
        answers: ['Europe', 'North America', 'South America', 'Africa'],
        correct: 0
    },
    {
        title: 'Who created the first successful printer?',
        answers: ['Nikola Tesla', 'Johannes Gutenberg', 'Henry Ford', 'Benjamin Franklin'],
        correct: 1
    },
    {
        title: 'What was the name of the first computer?',
        answers: ['INIAC', 'CAINE', 'ENIAC', 'CNIEC'],
        correct: 2
    }
]

function showQuestion(quest){

    let titleDiv = document.getElementById('title');
    titleDiv.textContent = quest.title;

    let answers = document.querySelectorAll('.answers');
    answers.forEach(function(element, index){
        element.textContent = quest.answers[index];
        element.addEventListener('click', function (){
            if(index == quest.correct){
                console.log("Right")
            } else {
                console.log("wrong")
            }
        })
    })
}

showQuestion(answers);
