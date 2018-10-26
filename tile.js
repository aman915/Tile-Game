//Print function to print div
function print() {
  //the login page disappears
  document.getElementById("login").style.display = "none";

  //the parent div
  var parentDiv = document.createElement("div");
  parentDiv.id = "parent";
  document.body.appendChild(parentDiv);

  // just a paragraph
  var para = document.createElement("p");
  para.id = "text";
  var t = document.createTextNode("Hurray !!!  Let's start the GAME ");
  para.appendChild(t);
  parentDiv.appendChild(para);

  //the countDown clock
  var clock = document.createElement("p");
  clock.id = "timer";
  var t = document.createTextNode("60");
  clock.appendChild(t);
  parentDiv.appendChild(clock);

  //variable for score, incorrect and correct attempts
  var score = 0;
  var correct = 0;
  var incorrect = 0;
  var blink;
  let seconds = 60;

  //Count of rows and columns
  var a = document.getElementById("row").value;
  var b = document.getElementById("column").value;

  //outer loop for rows
  for (var i = 1; i <= a; i++) {
    var outer = document.createElement("div");
    outer.id = "mainDiv" + 1;

    //inner loop for columns
    for (var j = 1; j <= b; j++) {
      var inner = document.createElement("div");

      //the blinking div
      inner.onclick = function(e) {
        if (e.currentTarget.classList.contains("check")) {
          score++;
          correct++;
        } else {
          score--;
          incorrect++;
        }
        var prev = document.getElementsByClassName("check");
        prev[0].style.opacity = 1;
        prev[0].classList.remove("check");
        start();
      };
      inner.id = i.toString() + j.toString();
      outer.appendChild(inner);
    }
    parentDiv.appendChild(outer);
  }

  //the Start butyon
  var btn = document.createElement("BUTTON");
  btn.id = "startButton";
  var t = document.createTextNode("START");
  btn.appendChild(t);
  parentDiv.appendChild(btn);

  //To set random values to x and y to make a id for blinking div
  function setValues() {
    x = Math.floor(Math.random() * a + 1);
    y = Math.floor(Math.random() * b + 1);
  }

  btn.onclick = function() {
    start();
    document.getElementById("startButton").disabled = true;
  };

  function start() {
    setInterval(function() {
      if (seconds == 0) {
        document.getElementById("parent").style.display = "none";
        var third = document.createElement("p");
        third.id = "timer";
        var t = document.createTextNode(
          "GAME OVER !!! Final Score =" + " " + score
        );
        third.appendChild(t);
        document.body.appendChild(third);

        document.getElementById("correct").innerHTML =
          "Total correct attempts are = " + " " + correct;

        document.getElementById("incorrect").innerHTML =
          "Total incorrect attempts are =  " + " " + incorrect;
      }
      document.getElementById("timer").innerHTML = seconds;
      seconds--;
    }, 1000);
    setValues();
    blink = document.getElementById(x.toString() + y.toString());
    blink.classList.add("check");
  }

  var scoreBox = document.createElement("p");
  scoreBox.id = "score";
  var t = document.createTextNode(" !!! Score " + score);
  scoreBox.appendChild(t);
  parentDiv.appendChild(scoreBox);

  setInterval(function() {
    document.getElementById("score").innerText = "!!! Score " + score;
  }, 300);
  var turn = true;

  setInterval(function() {
    let element = document.getElementsByClassName("check");
    if (element.length > 0) {
      if (turn) {
        element[0].style.opacity = 0.5;
        turn = false;
      } else {
        element[0].style.opacity = 1;
        turn = true;
      }
    }
  }, 100);

  parentDivv.appendChild(parentDiv);
  document.body.appendChild(parentDivv);
}
