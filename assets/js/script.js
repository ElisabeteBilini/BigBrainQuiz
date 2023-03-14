 // Collect username from index.html page

let btnInitial = document.querySelector('.initial-btn');
let collectName = document.querySelector('.user');

    btnInitial.addEventListener('click', () => {
    let collectName = document.querySelector('.userName').value; 
    localStorage.setItem('userName', collectName); 
    })

    if(collectName !== null) collectName.textContent = localStorage.getItem('userName');



//questions and answers
let questions= 
    {
        title: 'What was the name of the first computer?',
        answers: ['INIAC', 'CAINE', 'ENIAC', 'CNIEC'],
        correct: 2
    };


// show the question
function LoadQuestion(questions){
    let titleDiv = document.getElementById('title');
    titleDiv.textContent = questions.title;

// show the answers
    let answers =  document.querySelectorAll('.answers');
    //loop
    answers.forEach(function(element, index){             
        element.textContent = questions.answers[index];
    });
}

LoadQuestion(questions);