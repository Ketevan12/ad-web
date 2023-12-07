document.addEventListener("DOMContentLoaded", function () {
    const mainTitle = document.querySelector(".main-header");
    const dailyText = document.querySelector(".daily-header");
    const monthlyText = document.querySelector(".monthly-header");
    const dailyPhotos = document.querySelectorAll(".daily-photo");
    const monthlyPhotos = document.querySelectorAll(".monthly-photo");
    

    // Function to handle animations
    const handleAnimations = () => {
        // Hide "Routines?"
        mainTitle.style.animation = "fadeOutRoutines 6s forwards";
// Update the total duration based on your actual timing for daily photos
const totalDailyPhotosDuration = 25;

setTimeout(() => {
    monthlyText.style.animation = "fadeInMonthly 40s forwards";
}, totalDailyPhotosDuration);

        // Show "Daily?" after "Routines?" fades out
        setTimeout(() => {
            dailyText.style.animation = "fadeOutDaily 13s ease forwards";
        }, 1000);

        // Show daily images one by one after both "Routines?" and "Daily?" have faded out
        setTimeout(() => {
            dailyPhotos[0].style.animation = "fadeInPhoto 10s forwards";
        }, 3000);

        setTimeout(() => {
            dailyPhotos[1].style.animation = "fadeInPhoto 10s forwards";
        }, 5000);

        setTimeout(() => {
            dailyPhotos[2].style.animation = "fadeInPhoto 10s forwards";
        }, 7000);

        setTimeout(() => {
            dailyPhotos[3].style.animation = "fadeInPhoto 10s forwards";
        }, 7000);

        // Fade out "Daily?" after daily images have appeared
        setTimeout(() => {
            dailyText.style.animation = "fadeOutDaily 10s ease forwards";
        }, 10000);

        // Show "Monthly?" after "Daily?" fades out
        setTimeout(() => {
            monthlyText.style.animation = "fadeInMonthly 10s forwards";
        }, 1000);
    }
        // Show monthly images after "Monthly?" has appeared
        setTimeout(() => {
            monthlyPhotos.style.animation = "fadeInMonthlyPhoto 25s forwards";
        }, 20000);
        setTimeout(() => {
            monthlyPhotos[1].style.animation = "fadeInMonthlyPhoto 30s forwards";
        }, 15000);
  
    // Start the animations
    setTimeout(() => {
        handleAnimations();
    }, 500);
});

var Quiz = function(){
    var self = this;
    this.init = function(){
      self._bindEvents();
    }
    
    this.correctAnswers = [
      { question: 1, answer: 'a' },
      { question: 2, answer: 'b' },
      { question: 3, answer: 'd' },
      { question: 4, answer: 'c' },
      { question: 5, answer: 'd' },
      { question: 6, answer: 'b' },
    ]
    
    this._pickAnswer = function($answer, $answers){
      $answers.find('.quiz-answer').removeClass('active');
      $answer.addClass('active');
    }
    this._calcResult = function(){
      var numberOfCorrectAnswers = 0;
      $('ul[data-quiz-question]').each(function(i){
        var $this = $(this),
            chosenAnswer = $this.find('.quiz-answer.active').data('quiz-answer'),
            correctAnswer;
        
        for ( var j = 0; j < self.correctAnswers.length; j++ ) {
          var a = self.correctAnswers[j];
          if ( a.question == $this.data('quiz-question') ) {
            correctAnswer = a.answer;
          }
        }
        
        if ( chosenAnswer == correctAnswer ) {
          numberOfCorrectAnswers++;
          
          // highlight this as correct answer
          $this.find('.quiz-answer.active').addClass('correct');
        }
        else {
          $this.find('.quiz-answer[data-quiz-answer="'+correctAnswer+'"]').addClass('correct');
          $this.find('.quiz-answer.active').addClass('incorrect');
        }
      });
      if ( numberOfCorrectAnswers < 3 ) {
        return {code: 'bad', text: 'Poor spelling skills'};
      }
      else if ( numberOfCorrectAnswers == 3 || numberOfCorrectAnswers == 4 ) {
        return {code: 'mid', text: 'Moderate spelling skills'};
      }
      else if ( numberOfCorrectAnswers > 4 ) {
        return {code: 'good', text: 'Good spelling skills'};
      }
    }
    this._isComplete = function(){
      var answersComplete = 0;
      $('ul[data-quiz-question]').each(function(){
        if ( $(this).find('.quiz-answer.active').length ) {
          answersComplete++;
        }
      });
      if ( answersComplete >= 6 ) {
        return true;
      }
      else {
        return false;
      }
    }
    this._showResult = function(result){
      $('.quiz-result').addClass(result.code).html(result.text);
    }
    this._bindEvents = function(){
      $('.quiz-answer').on('click', function(){
        var $this = $(this),
            $answers = $this.closest('ul[data-quiz-question]');
        self._pickAnswer($this, $answers);
        if ( self._isComplete() ) {
          
          // scroll to answer section
          $('html, body').animate({
            scrollTop: $('.quiz-result').offset().top
          });
          
          self._showResult( self._calcResult() );
          $('.quiz-answer').off('click');
          
        }
      });
    }
  }
  var quiz = new Quiz();
  quiz.init();

  