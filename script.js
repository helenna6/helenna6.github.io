$(document).ready(function () {
  var magic8Ball = {};
  //Lista de respuestas posibles
  magic8Ball.listOfAnswers = [
    "No",
    "Si",
    "tal vez",
    "Murcia existe",
    "espana es mejor que otro país",
    "viva espana",
  ];

  $("#answer").hide();

  var onClick = function () {
    //Para el dialogo de la respuesta
    $("#answer").hide();
    $("#8ball").attr(
      "src",
      "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png"
    );

    setTimeout(function () {
      //Para la ventana emergente de si o no
      var question = prompt("HAZ UNA PREGUNTA DE RESPUESTA SI O NO");
      magic8Ball.askQuestion(question);
    }, 500);
  }; //Fin funcion onClick

  magic8Ball.askQuestion = function (question) {
    $("#8ball").effect("shake");
    $("#8ball").attr(
      "src",
      "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png"
    );
    $("#answer").fadeIn(4000);

    var randomNumber = Math.random(); //Generamos numero aleatorio

    //Seleccionamos una respuesta aleatoria de la lista de respuestas
    var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
    var randomIndex = Math.floor(randomNumberForListOfAnswers);
    var answer = this.listOfAnswers[randomIndex];

    $("#answer").text(answer);
    console.log(question);
    console.log(answer);
  }; //Fin funcion preguntar

  $("#questionButton").click(onClick); //Cuando le damos al boton de preguntas
});
