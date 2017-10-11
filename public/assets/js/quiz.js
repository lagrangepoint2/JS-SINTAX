$(document).ready(function(){
  quiz.start();
});

var questions = [
  {
    question: "Which of the following would you use to wrap around an array?",
    answers: ['( )', '[ ]', '" "', '{ }'],
    correctAnswer: '[ ]'
  }, 
  {
    question: 'What type of scope is it when a variable is not in a function?',
    answers: ['Local Scope', 'No Scope', 'Global Scope', 'Function Scope'],
    correctAnswer: 'Global Scope'
  },
  {
    question: 'What do you use console.log(); for?',
    answers: ['Leaving notes for your buddies', 'Debugging and testing', 'Leave comments on your code', 'Having an alert pop out in your website'],
    correctAnswer: 'Debugging and testing'
  },
  {
    question: 'If you want the value of the number five, how would you write it out?',
    answers: ['5', '"five"', 'five', '"5"'],
    correctAnswer: '5' 
  },
  {
    question: 'What do you start a line with to leave a comment in your code?',
    answers: ['<--', '/*', '""', '//'],
    correctAnswer: '//'
  }
];

var quiz = {
  correct: 0,
  sins: 0,
  counter: 60,
  countdown: function() {
    $('#quizBtn').on('click', function(){
      event.preventDefault();
      quiz.done();
    $('#quizBtn').hide();
    });
    quiz.counter--;
    $('#counter').html(quiz.counter);
    if(quiz.counter === 0){
      quiz.done();
    };
  },
  start: function(){
//timer decrease time by 1 second
    timer = setInterval(quiz.countdown, 1000);
// Put timer in html
    $('#wrapper').prepend('<h2> Time Remaining: <span id="counter"></span> Seconds </h2>')
// Put the questions and answers in the html
    for (var i =0; i < questions.length; i++){ 
      for (var j = 0; j < questions[i].answers.length; j++){
      }
    }
  },
  done: function(){
    $.each($('input[id="q1-2"]:checked'), function(){
      if($(this).val() === questions[0].correctAnswer){
        quiz.correct++;
      } else if($(this).val() != questions[0].correctAnswer) {
        quiz.sins++;
      }
    });
    $.each($('input[id="q2-3"]:checked'), function(){
     if($(this).val() === questions[1].correctAnswer){
       quiz.correct++;
     } else {
       quiz.sins++;
     }
   });
   $.each($('input[id="q3-2"]:checked'), function(){
     if($(this).val() === questions[2].correctAnswer){
       quiz.correct++;
     } else {
       quiz.sins++;
     }
   });
   $.each($('input[id="q4-1"]:checked'), function(){
      if($(this).val() === questions[3].correctAnswer){
        quiz.correct++;
      } else {
        quiz.sins++;
      }
   });
   $.each($('input[id="q5-4"]:checked'), function(){
      if($(this).val() === questions[4].correctAnswer){
        quiz.correct++;
      } else {
        quiz.sins++;
      }
   });
    
   this.result();
  },
  result: function(){
    clearInterval(timer);
    $('#wrapper h2').remove();
    $('#wrapper').html('<h2>Quiz Completed!</h2>');
    $('#wrapper').append('<h3>Correct Answers: ' + this.correct + '</h3>');
    $('#wrapper').append('<h3>Sins: ' +(questions.length - (this.correct)) + '</h3>');
  }

};