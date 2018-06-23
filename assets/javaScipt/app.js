






// start page 
// start button starts game 



// at game start time starts ticking down
// if answwer chosen and hit submit
// show results screen win lose and correct answer with picture
// if do not choose, time is up screen with correct answer
// hide results or time up after 4 seconds
// automatically go to next question after 4 seconds
// timer restarts
// new question
// on last question 
// show results of game
// on click reset button restart game



// 'use strict';

// $(() => {

// quiz questions and answers
//STORE is an array of objects to contain all quiz data. 
const store = [
    {
        question: "What dog breed makes a yodeling sound instead of barking?",
        answers: [
            "Otterhound",
            "Basenji",
            "Akita",
            "American Fox Hound",
        ],
        correctAnswer: 1,
        icon: "https://i.imgur.com/owKWHeEb.jpg",
        alt: 'Basenji',
    },

    {
        question: "Which breed of dog runs the fastest, up to 45mph?",
        answers: [
            "Vizsla",
            "Jack Russell Terrier",
            "Whippet",
            "Greyhound",
        ],
        correctAnswer: 3,
        icon: "https://vetstreet.brightspotcdn.com/dims4/default/3203abb/2147483647/crop/0x0%2B0%2B0/resize/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F5e%2F5113c0a75711e0a0d50050568d634f%2Ffile%2FGreyhound-2-645mk062411.jpg",
        alt: 'Greyhound',

    },
    {
        question: "80% of what breed dog requires a c-section delivery due to the size of the puppies head?",
        answers: [
            "Labrador",
            "Mastiff",
            "Great Dane",
            "English Bulldog",
        ],
        correctAnswer: 3,
        icon: "https://i.imgur.com/sUUA73kb.jpg",
        alt: 'English Bulldog',
    },
    {
        question: "What dog breed has a tongue that turns blue-black at 5-10 weeks of age?",
        answers: [
            "Dalmation",
            "Husky",
            "Chow Chow",
            "Pug",
        ],
        correctAnswer: 2,
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhToXuOShlohmhyv4n86_1hT0O6jHk-qtVLhJjhkJKY56tPtzs",
        alt: 'Chow Chow',
    },
    {
        question: "This breed has been on the AKC top ten list of most popular dog breeds for 25 consecutive years?",
        answers: [
            "Labrador",
            "Beagle",
            "Golden retriever",
            "Great Dane",
        ],
        correctAnswer: 0,
        icon: "https://images.pexels.com/photos/407082/dog-face-labrador-smile-407082.jpeg?h=350&auto=compress&cs=tinysrgb",
        alt: 'Labrador',
    },
    {
        question: "What dog breed was bred to fight badgers?",
        answers: [
            "Bassett Hound",
            "Dachshund",
            "Jack Russell",
            "American Fox Hound",
        ],
        correctAnswer: 1,
        icon: "https://images.pexels.com/photos/688694/pexels-photo-688694.jpeg?h=350&auto=compress&cs=tinysrgb",
        alt: 'Dachshund',
    },
    {
        question: "What dog breed was bred to hunt lions?",
        answers: [
            "Rhodesian Ridgeback",
            "Mastiff",
            "Akita",
            "American Bulldog",
        ],
        correctAnswer: 0,
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe3l4tIAmqS5jVUl22tqfPCxuwKCEcmSJkrkP9OfDVQhdPpAke",
        alt: 'Rhodesian Ridgeback',
    },
    {
        question: "This dog breed is able to climb trees!",
        answers: [
            "Brussels Griffon",
            "Chihuahua",
            "Cocker Spaniel",
            "Catahoula leopard ",
        ],
        correctAnswer: 3,
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRJluOnIKYckqEvjtvLB8qp4cdEvYLJteVm1fuU0UK2AvnJ7CtFA",
        alt: 'Catahoula leopard',
    },
    {
        question: "Which of these dog breeds has the best sense of smell?",
        answers: [
            "German Shorthair Pointer",
            "English Setter",
            "Bloodhound",
            "Coonhound",
        ],
        correctAnswer: 2,
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGX6R5LGg5-bTorjDunOXVfiiLl4IawOXHNNbpFqAy-dGi2Hwq",
        alt: 'Bloodhound',
    },
    {
        question: "What dog breed is geneticly a dwarf?",
        answers: [
            "Bassett Hound",
            "Poodle",
            "Bichon Frise",
            "Maltese",
        ],
        correctAnswer: 0,
        icon: "https://scontent.fapa1-2.fna.fbcdn.net/v/t1.0-9/21032380_10211653636669472_8014600278065846889_n.jpg?oh=105782702ac9fcb61a1e7976a3b189a6&oe=5B3D64EC",
        alt: 'Bassett Hound',
    },
]

//assigning to zero for start of application
let answeredCorrectly = 0;
let answeredIncorrectly = 0;
let unansweredQuestions = 0;
let i = 8;
let questionInterval = null;
let resultInterval = null;



//    display question screen with form

function generateCurrentQuestion() {
    // 
    let currentQuestion = `
    
    <h3 class="question">${store[i].question}</h3>
    <input id="answer0" class="block" type="radio" name="answer" value="0" checked>
    <label for="answer0" class="label">${store[i].answers[0]}</label>
    <input id="answer1" class="block" type="radio" name="answer" value="1">
    <label for="answer1" class="label">${store[i].answers[1]}</label>
    <input id="answer2" class="block" type="radio" name="answer" value="2">
    <label class="label" for="answer2">${store[i].answers[2]}</label>
    <input id="answer3" class="block" type="radio" name="answer" value="3">
    <label for="answer3" class="label">${store[i].answers[3]}</label>
    <br>
    <button type="button" id="js-submit-button" class="btn btn-primary btn-lg" >Submit</button>
    `;
    $(".surveyForm").html(currentQuestion)
    $("#js-submit-button").on("click", function () {
        clearInterval(questionInterval);
        submitAnswer();

    });
    startQuestionTimer();
};



// set interval for questions
function startQuestionTimer() {
    let time = 10;
    $(".timer").html(time);
    questionInterval = setInterval(function () {
        if (time === -1) {
            clearInterval(questionInterval);
            unansweredQuestions++;
            showAnswer("Times Up!!");
        } else {
            $(".timer").html(time);
            time--;
        }
    }, 1000);
};




function submitAnswer() {
    // Get the user input
    let selectedAnswer = parseInt($(`input[name = answer]:checked`).val());
    // Compare with correct answer
    let correctAnswer = store[i].correctAnswer;
    let resultMessage = "";
    if (selectedAnswer === correctAnswer) {
        // update user score
        answeredCorrectly++;
        resultMessage = "Good Dog!!!";
    } else {
        answeredIncorrectly++;
        resultMessage = "Dog Gone It!!!";
    }

    // Show correct answer for 4 seconds
    showAnswer(resultMessage);
}



function showAnswer(message) {
    //hide question
    $(".surveyForm").hide();
    $(".timer").hide();
    //show pic and answer
    let correctFeedback = `
            <h2 class="resultMessage">${message}</h2>
            <p>The correct answer is ${store[i].alt}</p>
            <img class="resultPic" src="${store[i].icon}" alt="${store[i].alt}"  width="200" />`
    $("#win-lose-timeOut").html(correctFeedback).show();
    //timer 4 sec
    resultInterval = setInterval(goToNextQuestion, 4000);
    //go to next question

};


function goToNextQuestion() {
    clearInterval(resultInterval);
    $("#win-lose-timeOut").hide();

    if (i < (store.length - 1)) {
        i++;
        generateCurrentQuestion();
        $(".surveyForm").show();
        $(".timer").show();
    } else {
        $(".surveyForm").hide();
        $(".timer").hide();
        let finalScore = `
            <h2>Answered Correctly: ${answeredCorrectly}</h2>
            <h2>Answered Inorrectly: ${ answeredIncorrectly}</h2>
            <h2>Unaswered: ${unansweredQuestions}</h2>
            <button type="button" class="btn btn-primary" id="playAgain">Play Again</button>`;
        $("#finalPage").html(finalScore).show();
    }

    $("#playAgain").on("click", function () {
        // reset game
        // Set everything back to zero
        restartGame();
        // Start the question again
        generateCurrentQuestion();
        $(".surveyForm").show();
        $(".timer").show();
        //show survey from
        //show timer
        //hide finalPage
        $("#finalPage").hide();
    });



};

function restartGame() {
    answeredCorrectly = 0;
    answeredIncorrectly = 0;
    unansweredQuestions = 0;
    i = 0;
    questionInterval = null;
    resultInterval = null;
}



generateCurrentQuestion();






