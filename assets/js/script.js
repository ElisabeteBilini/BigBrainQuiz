 // Login Page
 const btnInitial = document.querySelector('.initial-btn');
 const collectName = document.getElementById('user');
 const loginPage = document.querySelector('.login');
 const mainPage = document.querySelector('.main');
 const congratsPage = document.getElementById('congrats');
 const messagePage = document.getElementById('message');
  
 btnInitial.addEventListener('click', () => {
   const username = document.getElementById('username');
   if (username) {
     const collectName = username.value;
     localStorage.setItem('userName', collectName); // Armazena o nome de usuário no localStorage
     //console.log(collectName);
     mainPage.classList.remove('hidden');
     loginPage.classList.add('hidden');
     document.querySelector('.user').textContent = collectName; // Exibe o nome de usuário na tela
   }
 });
  
   if(collectName !== null) collectName.textContent = localStorage.getItem('userName');
 
 function lettersOnly(event) {
   const input = document.getElementById('username');
   input.value = input.value.replace(/[^a-zA-Z]/g, '');
   
   if (!input.value.match(/^[a-zA-Z]+$/)) {
     event.preventDefault();
     alert("Enter letters only.");
   }
 
   return true;
 }


// Game Page

//questions and answers 
const questions = [
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
  ];

 // shuffle questions
 function shuffleQuestions() {
    for (let i = questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [questions[i], questions[j]] = [questions[j], questions[i]];
    }
     return questions;
  }
  shuffleQuestions();

  function displayQuestion() {
    const questionElement = document.getElementById('title');
    const answersElements = document.getElementsByClassName('answers');
    const numberQuestionElement = document.getElementsByClassName('numberQuestion')[0];
    
    const current = questions[currentQuestion];
    questionElement.textContent = current.title;
  
    for (let i = 0; i < answersElements.length; i++) {
      const answerElement = answersElements[i];
      answerElement.textContent = current.answers[i];
      answerElement.classList.remove('correct', 'incorrect');
      answerElement.addEventListener('click', checkAnswer);
    }
  
    const questionNumber = currentQuestion + 1;
    numberQuestionElement.textContent = questionNumber <= 10 ? questionNumber : '';
  }