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


// Variables declaration
let answers = document.querySelectorAll('.answers');
let title = document.getElementById('title');
let score = document.getElementById('score');
let resultDiv = document.getElementById('result');
let congrats = document.getElementById('congrats');
let divQuestions = document.querySelector('.divQuestions');
let numberQuestions = questions.length;
let spanNumberQuestion = document.querySelector('.numberQuestion');
let spanTotalQuestions = document.querySelector('.totalQuestions');


// Structure of game
let game = {

play: function (){
    this.atualPosition = 0;
    this.scoreTotal = 0;
    answers.forEach((element, index) => {
        element.addEventListener('click', () => {
                this.check(index);
        })
    })
    this.scoreBoard();
    game.loadQuestion(questions[this.atualPosition]);
},

// show questions and answers
loadQuestion: function (question){
    this.currentQuest = question;
    title.textContent = question.title;
    answers.forEach(function (element, index){
        element.textContent = question.answers[index];
    })

    // show question number
    spanNumberQuestion.textContent = this.atualPosition+1;
    spanTotalQuestions.textContent = numberQuestions;
},

// next question
next: function() {
    this.atualPosition++;
    if(this.atualPosition >= numberQuestions){
                
        congrats.classList.remove('hidden');
        divQuestions.classList.add('.hidden');
        btnExit.classList.add('.hidden');
        hello.style.display= 'none;'
        footerbtn.style.display = 'none';
    }
},

check: function (user){
    if(this.atualPosition.correct == user){
        console.log("You got Right")
        this.scoreTotal++;
        } else {
        console.log("You Missed")
        }
    this.scoreBoard();
    this.next();
    this.loadQuestion(questions[this.atualPosition]);
},

scoreBoard: function() {
    let scoreDiv = document.getElementById('score');
    scoreDiv.textContent = `Scoreboard: ${this.scoreTotal}`;
},
}
game.play();
